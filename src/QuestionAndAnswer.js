const questions = [
	{
		ques: 'Con gì có mũi mà không có mắt, có lưỡi mà không có miệng?',
		ans: ['con dao', 'con gà', 'con ong', 'con châu chấu'],
	},
	{
		ques: 'Xe nào không bao giờ giảm đi?',
		ans: ['xe máy', 'xe tăng', 'xe đạp', 'ô tô'],
	},
	{
		ques: 'Ba con gà có tất cả bao nhiêu cái răng?',
		ans: ['0', '6', '9', '12'],
	},
	{
		ques: 'Môn thể thao nào có cả vua lẫn hoàng hậu?',
		ans: ['cờ vua', 'cờ tướng', 'cờ cá ngựa', 'cờ caro'],
	},
	{
		ques: 'Loại xe không có bánh thường thấy ở đâu?',
		ans: ['Trung Quốc', 'bàn cờ', 'tương lai', 'ngoài hành tinh'],
	},
	{
		ques: 'Quả gì ai cũng sợ ăn trúng?',
		ans: ['quả trứng gà', 'quả mít', 'quả báo', 'quả na'],
	},
	{
		ques: 'Đồng gì mà đa số ai cũng thích?',
		ans: ['đồng thau', 'đồng đen', 'đồng tiền', 'đồng lúa'],
	},
	{
		ques: 'Ốc gì to nhất?',
		ans: ['ốc bưu vàng', 'ốc sên', 'ốc đảo', 'ốc hương'],
	},
	{
		ques: 'Bánh gì ăn ít mà nhiều?',
		ans: ['bánh đa', 'bánh rán', 'bánh chưng', 'bánh kem'],
	},
	{
		ques: 'Trò gì 5 bé hơn 2, 2 bé hơn 0 và 0 bé hơn 5?',
		ans: ['oẳn tù xì', 'ô ăn quan', 'trốn tìm', 'bịt mắt bắt dê'],
	},
]

const answers = [
	'con dao',
	'xe tăng',
	'0',
	'cờ vua',
	'bàn cờ',
	'quả báo',
	'đồng tiền',
	'ốc đảo',
	'bánh đa',
	'oẳn tù xì',
]

const shuffleArray = (arr1, arr2) => {
	for (let i = arr1.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		if (i == j) continue
		let tmp = arr1[i]
		arr1[i] = arr1[j]
		arr1[j] = tmp

		tmp = arr2[i]
		arr2[i] = arr2[j]
		arr2[j] = tmp
	}
}

shuffleArray(questions, answers)

export { questions, answers }
