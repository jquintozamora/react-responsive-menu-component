module.exports = {
	data: {
		nav: [
			{
				href: "http://localhost:3000/",
				text: "Home",
				title: "Home title"
			},
			{
				href: "https://blog.josequinto.com/",
				text: "Blog",
				title: "Technical blog"
			},
			{
				href: "https://blog.josequinto.com/",
				text: "Blog 1",
				title: "Technical blog 1"
			},
			{
				href: "https://blog.josequinto.com/",
				text: "Blog 2",
				title: "Technical blog 2"
			},
			{
				href: "",
				text: "Group Menu",
				title: "Group menu title",
				children: [
					{
						href: "http://localhost:3000/",
						text: "Group Header 1",
						title: "Group Header 1 title",
						children: [
							{
								href: "http://localhost:3000/",
								text: "Nav Item 1.1",
								title: "Nav Item 1.1"
							},
							{
								href: "http://localhost:3000/",
								text: "Nav Item 1.2",
								title: "Nav Item 1.2"
							}
						]
					},
					{
						href: "http://localhost:3000/",
						text: "Group Header 2",
						title: "Group Header 2 title",
						children: [
							{
								href: "http://localhost:3000/",
								text: "Nav Item 2.1",
								title: "Nav Item 2.1"
							},
							{
								href: "http://localhost:3000/",
								text: "Nav Item 2.2",
								title: "Nav Item 2.2"
							}
						]
					},
				]
			}
		],
		menu: [
			{
				href: "https://blog.josequinto.com",
				text: "Blog",
				title: "Blog title"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 2",
				title: "Blog title 2"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 3",
				title: "Blog title 3"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 4",
				title: "Blog title 4"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 5",
				title: "Blog title 5"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 6",
				title: "Blog title 6"
			},
			{
				href: "https://blog.josequinto.com",
				text: "Blog 7",
				title: "Blog title 7"
			}
		]
	}
}