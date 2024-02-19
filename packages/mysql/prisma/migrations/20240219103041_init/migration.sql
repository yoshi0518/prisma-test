-- CreateTable
CREATE TABLE `t_posts` (
    `id` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT NOW(3) ON UPDATE NOW(3),
    `title` VARCHAR(200) NOT NULL,
    `content` TEXT NULL,
    `published` SMALLINT NOT NULL DEFAULT 0,
    `user_id` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `t_users` (
    `id` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT NOW(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT NOW(3) ON UPDATE NOW(3),
    `user_id` VARCHAR(100) NOT NULL,
    `user_name` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NULL,

    UNIQUE INDEX `t_users_user_id_key`(`user_id`),
    UNIQUE INDEX `t_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `t_posts` ADD CONSTRAINT `t_posts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `t_users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
