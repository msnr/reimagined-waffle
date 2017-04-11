export function configure(config) {
	config.globalResources([
		'./value-converters/date',
		'./value-converters/filter-by',
		'./value-converters/order-by'
	]);
}
