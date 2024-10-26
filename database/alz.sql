-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 22, 2024 at 10:11 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alz`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
CREATE TABLE IF NOT EXISTS `answers` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `score_sheet_id` bigint DEFAULT NULL,
  `questionnaire_id` bigint DEFAULT NULL,
  `score` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('badodo@gmail.com|127.0.0.1:timer', 'i:1729591624;', 1729591624),
('badodo@gmail.com|127.0.0.1', 'i:1;', 1729591624);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `examinations`
--

DROP TABLE IF EXISTS `examinations`;
CREATE TABLE IF NOT EXISTS `examinations` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_title` longtext COLLATE utf8mb4_unicode_ci,
  `instruction` longtext COLLATE utf8mb4_unicode_ci,
  `als_level` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `examinations`
--

INSERT INTO `examinations` (`id`, `title`, `sub_title`, `instruction`, `als_level`, `created_at`, `updated_at`) VALUES
(2, '3434', '4343', '4343', NULL, '2024-10-21 19:50:13', '2024-10-21 19:50:13'),
(3, 'wa', 'w4e34', '4343', NULL, '2024-10-21 19:58:37', '2024-10-21 19:58:37'),
(4, '4343', '43', '333', NULL, '2024-10-21 19:59:58', '2024-10-21 19:59:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_09_21_112908_create_personal_access_tokens_table', 1),
(5, '2024_10_21_103755_create_examinations_table', 1),
(6, '2024_10_21_104249_create_questionnaires_table', 1),
(7, '2024_10_21_105003_create_score_sheets_table', 1),
(8, '2024_10_21_105054_create_answers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questionnaires`
--

DROP TABLE IF EXISTS `questionnaires`;
CREATE TABLE IF NOT EXISTS `questionnaires` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `examination_id` bigint DEFAULT NULL,
  `question` longtext COLLATE utf8mb4_unicode_ci,
  `answer_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `specification` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `a` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `b` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `d` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `e` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questionnaires`
--

INSERT INTO `questionnaires` (`id`, `examination_id`, `question`, `answer_key`, `specification`, `a`, `b`, `c`, `d`, `e`, `created_at`, `updated_at`) VALUES
(4, 2, 'Considering the complex environmental and economic factors involved, what are the potential benefits and challenges of implementing large-scale renewable energy projects, such as solar or wind farms, in rural areas, particularly in terms of balancing local community interests, ecosystem preservation, and the long-term sustainability of energy production?', 'C', 'waaa', '44', '44', '4', '45', '55', '2024-10-21 21:09:36', '2024-10-21 21:09:36'),
(5, 2, 'In light of the rapid advancements in artificial intelligence and machine learning technologies, how do you think the integration of AI in various industries, such as healthcare, finance, and transportation, will impact the global workforce in terms of job displacement, the creation of new roles, and the need for re-skilling or up-skilling employees to adapt to the changing job market?', 'E', 'aaaa', '33', '33', '333', '3', '3', '2024-10-21 21:16:25', '2024-10-21 21:16:25'),
(6, 2, 'Given the ongoing debates surrounding climate change and its effects on global weather patterns, what role do you believe international cooperation, through agreements such as the Paris Accord, plays in effectively addressing environmental issues while also ensuring that economic development goals are met, especially in developing countries that may rely heavily on fossil fuels for their growth?', 'A', 'bbbb', '43433', '343', '4343', '33', '33', '2024-10-21 21:41:27', '2024-10-21 21:41:27'),
(7, 2, '34342323232', 'E', 'aaaa', '1', '1', '1', '2', '3', '2024-10-22 13:29:59', '2024-10-22 13:29:59');

-- --------------------------------------------------------

--
-- Table structure for table `score_sheets`
--

DROP TABLE IF EXISTS `score_sheets`;
CREATE TABLE IF NOT EXISTS `score_sheets` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `overall_score` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `als_level` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `assigned` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`, `dob`, `mobile`, `profile`, `assigned`, `user_type`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'admin@gmail.com', '$2y$12$dwHgbPqfTkCFD684l3pMSuMRQnz3VICLFEltP9U1mNq4gmuPYY7b2', NULL, NULL, NULL, NULL, NULL, '1', '2024-10-21 18:24:02', 'IfiD8THj6SKmhsNwhojnik15pzpN6utx5kDIGww0Z4Dn7RD1humpZKULdrDc', '2024-10-21 18:24:02', '2024-10-21 18:24:41'),
(2, 'Student', 'student@gmail.com', '$2y$12$dwHgbPqfTkCFD684l3pMSuMRQnz3VICLFEltP9U1mNq4gmuPYY7b2', 'dadawd', '23', '43434334', NULL, NULL, '3', '2024-10-21 18:24:02', 'aWaPCWuWr0', '2024-10-21 18:24:02', '2024-10-21 18:24:41'),
(3, 'Teacher', 'teacher@gmail.com', '$2y$12$dwHgbPqfTkCFD684l3pMSuMRQnz3VICLFEltP9U1mNq4gmuPYY7b2', 'waaaa', '12', '123232', NULL, NULL, '2', '2024-10-21 18:24:02', 'aWaPCWuWr0', '2024-10-21 18:24:02', '2024-10-21 18:24:41');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
