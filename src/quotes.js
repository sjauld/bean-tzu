// Bean Tzu - The Art of #Deal: Random Quote Feature
const quotes = [
    // Sfos originals
    "In the ledger of war, know your own assets and your enemy's liabilities. For victory is assured not by force alone, but by balancing every debit against your foe's defeat.",
    "A wise general hides gold where the emperor’s auditors cannot see; for unseen profit funds unseen conquest.",
    // ChatGPT generated
    "Opportunities multiply as they are audited. A wise general reconciles every transaction before advancing.",
    "The greatest victory is that which requires no write-off. Let your balance sheet be stronger than your adversary’s.",
    "All warfare is based on cost allocation. To win, ensure your resources are efficiently deployed and your expenses minimized.",
    "He who knows when to expense and when to capitalize will find profit in every campaign.",
    "Strategy without numbers is the slowest route to victory. Numbers without strategy is the noise before bankruptcy.",
    "If you know the enemy and know yourself, your financial statements need not fear the outcome of a thousand battles.",
    "Let your plans be dark and impenetrable as a consolidated report, but when you execute, act as swiftly as a closing entry.",
    "The supreme art of war is to subdue the enemy without exceeding your budget.",
    "Victorious warriors win first and then go to audit, while defeated warriors go to audit first and then seek to win.",
    "In the spreadsheet of battle, every cell must be accounted for.",
    "A wise commander never underestimates the value of a well-timed accrual.",
    "The path to victory is paved with reconciled accounts.",
    "When the enemy is strong, diversify your assets. When weak, consolidate your gains.",
    "Cash flow is the lifeblood of war. Guard it as you would your fortress.",
    "The best defense is a robust audit trail.",
    "To know your own balance sheet and that of your adversary is to hold the keys to triumph.",
    "A general who ignores depreciation will find his resources eroded in time.",
    "In war, as in accounting, timing is everything.",
    "The wise strategist reviews the books before making a move.",
    "Victory favors those who reconcile early and often.",
    "A surplus in reserves is worth more than a deficit in courage.",
    "Beware the hidden liabilities; they are the undoing of empires.",
    "The art of war is the art of balancing assets and liabilities.",
    "When your ledgers are clear, your mind is free for strategy.",
    "A single unbalanced entry can topple the mightiest army.",
    "The greatest generals are those who audit themselves first.",
    "In the fog of war, clarity comes from clean books.",
    "Let your reserves be deep and your debts shallow.",
    "The wise commander invests in intelligence and audits in silence.",
    "A well-kept ledger is a shield against defeat.",
    "The costliest mistake is the one unrecorded.",
    "He who controls the cash controls the campaign.",
    "A battle won on credit is a battle lost in the long run.",
    "The enemy’s weakness is often found in their footnotes.",
    "Victory is a matter of margins, not miracles.",
    "The best offense is a well-capitalized defense.",
    "Let your strategy be as flexible as your budget.",
    "A general who discounts the future is doomed to repeat the past.",
    "In every campaign, audit your allies as well as your adversaries.",
    "The final victory is reconciliation.",
    "When the numbers align, so too does fortune.",
    "The supreme audit is to find no errors at all."
];

function showRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-section').innerText = quote;
}

document.addEventListener('DOMContentLoaded', showRandomQuote);
