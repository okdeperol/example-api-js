
const renderPriceSize = ({price, size}) => `
    ${price ? '<li>price: ' +price+ '</li>' : ''}
    ${size ? '<li>size: ' +size+ '</li>' : ''}
`

export const renderQuote = (symbol, {
    Bid,
    HighPrice,
    LowPrice,
    Offer,
    OpenInterest,
    OpeningPrice,
    SettlementPrice,
    TotalTradeVolume,
    Trade,
}) => `
    <section>
        <h1>${symbol}</h1>
        <span>
            <div>
                <h3>Bid</h3>
                <ul>
                    ${renderPriceSize(Bid)}
                </ul>
            </div>
            <div>
                <h3>HighPrice</h3>
                <ul>
                    ${renderPriceSize(HighPrice)}
                </ul>
            </div>
            <div>
                <h3>LowPrice</h3>
                <ul>
                    ${renderPriceSize(LowPrice)}
                </ul>
            </div>
            <div>
                <h3>Offer</h3>
                <ul>
                    ${renderPriceSize(Offer)}
                </ul>
            </div>
            <div>
                <h3>OpenInterest</h3>
                <ul>
                    ${renderPriceSize(OpenInterest)}
                </ul>
            </div>
            <div>
                <h3>OpeningPrice</h3>
                <ul>
                    ${renderPriceSize(OpeningPrice)}
                </ul>
            </div>
            <div>
                <h3>SettlementPrice</h3>
                <ul>
                    ${renderPriceSize(SettlementPrice)}
                </ul>
            </div>
            <div>
                <h3>TotalTradeVolume</h3>
                <ul>
                    ${renderPriceSize(TotalTradeVolume)}
                </ul>
            </div>
            <div>
                <h3>Trade</h3>
                <ul>
                    ${renderPriceSize(Trade)}
                </ul>
            </div>
        </span>
    </section>
`