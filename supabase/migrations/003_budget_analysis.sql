-- 予算書AIレビュー用テーブル
-- budget_analyses: 予算分析の履歴を保存

CREATE TABLE IF NOT EXISTS budget_analyses (
    id BIGSERIAL PRIMARY KEY,
    fiscal_year INTEGER NOT NULL,           -- 対象年度（例: 2026）
    budget_type VARCHAR(50) NOT NULL,       -- 予算種別（general, special, enterprise）
    title VARCHAR(255),                     -- タイトル（任意）
    input_data TEXT,                        -- 入力データ（テキスト）

    -- 分析結果（各セクション）
    overview_summary TEXT,                  -- 概要サマリー
    comparison_result TEXT,                 -- 前年度比較
    fiscal_result TEXT,                     -- 財政指標分析
    questions_result TEXT,                  -- 質問ポイント

    -- メタデータ
    quick_stats JSONB,                      -- クイックスタッツ（JSON形式）
    is_sample BOOLEAN DEFAULT FALSE,        -- サンプルデータかどうか

    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックス
CREATE INDEX idx_budget_analyses_fiscal_year ON budget_analyses(fiscal_year);
CREATE INDEX idx_budget_analyses_created_at ON budget_analyses(created_at DESC);

-- RLS（Row Level Security）を有効化
ALTER TABLE budget_analyses ENABLE ROW LEVEL SECURITY;

-- ポリシー: 全員が読み書き可能（会員ページなので認証済み前提）
CREATE POLICY "Allow all operations on budget_analyses" ON budget_analyses
    FOR ALL USING (true) WITH CHECK (true);

-- 更新時にupdated_atを自動更新するトリガー
CREATE OR REPLACE FUNCTION update_budget_analyses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_budget_analyses_updated_at
    BEFORE UPDATE ON budget_analyses
    FOR EACH ROW
    EXECUTE FUNCTION update_budget_analyses_updated_at();
