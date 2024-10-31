use anchor_lang::prelude::*;

declare_id!("Ajr5JdkhumKz2dNkUaPp6vJ49TAJehFCmURY3hb1QnbJ");

#[program]
pub mod anchor_test {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
