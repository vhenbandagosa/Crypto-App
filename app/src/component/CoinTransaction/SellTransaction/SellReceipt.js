import React from 'react';
export default function SellReceipt(props) {
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<h3>Coin:</h3>
					</td>
					<td>
						<p>{props.coin.name}</p>
					</td>
				</tr>
				<tr>
					<td>
						<h3>Price:</h3>
					</td>
					<td>
						<p>{props.coin.market_data.current_price.usd}</p>
					</td>
				</tr>
				<tr>
					<td>
						<h3>Quantity:</h3>
					</td>
					<td>
						<p>{props.quantity}</p>
					</td>
				</tr>
				<tr>
					<td>
						<h3>Amount:</h3>
					</td>
					<td>
						<p>{props.formatter.format(props.amount)}</p>
					</td>
				</tr>
				<tr>
					<td>
						<h3>Profit/Loss:</h3>
					</td>
					<td>
						<p>{props.formatter.format(props.profit)}</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}