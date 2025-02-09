#![allow(elided_lifetimes_in_paths)]
#![allow(clippy::wildcard_imports)]
pub use sea_orm_migration::prelude::*;
mod m20220101_000001_users;

mod m20250126_185604_articles;
mod m20250126_190248_comments;
mod m20250206_222306_items;
pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20220101_000001_users::Migration),
            Box::new(m20250126_185604_articles::Migration),
            Box::new(m20250126_190248_comments::Migration),
            Box::new(m20250206_222306_items::Migration),
            // inject-above (do not remove this comment)
        ]
    }
}