use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
//size of the account = 8 + 32 + 32 + 32 + 8 + 1 = 113 + padding(InitSpace) = 120
pub struct Offer {
    pub id: u64,
    pub maker: Pubkey,
    pub token_mint_a: Pubkey,
    pub token_mint_b: Pubkey,
    pub token_b_wanted_amount: u64,
    pub bump: u8,
}