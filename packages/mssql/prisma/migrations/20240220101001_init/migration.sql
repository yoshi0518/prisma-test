BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[t_posts] (
    [id] VARCHAR(50) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [t_posts_created_at_df] DEFAULT getdate(),
    [updated_at] DATETIME2 NOT NULL CONSTRAINT [t_posts_updated_at_df] DEFAULT getdate(),
    [title] VARCHAR(200) NOT NULL,
    [content] TEXT,
    [published] SMALLINT NOT NULL CONSTRAINT [t_posts_published_df] DEFAULT 0,
    [user_id] VARCHAR(100) NOT NULL,
    CONSTRAINT [t_posts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[t_users] (
    [id] VARCHAR(50) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [t_users_created_at_df] DEFAULT getdate(),
    [updated_at] DATETIME2 NOT NULL CONSTRAINT [t_users_updated_at_df] DEFAULT getdate(),
    [user_id] VARCHAR(100) NOT NULL,
    [user_name] VARCHAR(200) NOT NULL,
    [email] VARCHAR(200),
    CONSTRAINT [t_users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [t_users_user_id_key] UNIQUE NONCLUSTERED ([user_id]),
    CONSTRAINT [t_users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- AddForeignKey
ALTER TABLE [dbo].[t_posts] ADD CONSTRAINT [t_posts_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[t_users]([user_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
