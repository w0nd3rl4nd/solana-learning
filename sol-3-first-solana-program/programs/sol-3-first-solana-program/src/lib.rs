use anchor_lang::prelude::*;

declare_id!("EmvkmUsjJARPhJzWe3y3tcNC1HwFRntScYRzFvz77fDM");

#[program]
pub mod sol_3_first_solana_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
