use loco_rs::cli;
use migration::Migrator;
use traction::app::App;

#[tokio::main]
async fn main() -> loco_rs::Result<()> {
    cli::main::<App, Migrator>().await
}
