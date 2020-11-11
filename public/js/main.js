

let del = document.querySelector('del')


// Update event listener and fetch ...

del.addEventListener('click', function () {

	let title = document.querySelector('title').value

	fetch('delete', {

		method: 'delete',
		headers: {
			'content-type': 'application/json'
		},

		body: JSON.stringify({
			'title': title
		})
	})

	.then(res => {

		if (res.ok) return res.json()
	})

	.then(data => {

		console.log(data)
		window.location.reload()
	})
})