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
				href: "http://localhost:3000/",
				text: "Menu Item 1",
				title: "Menu Item 1 title",
			},
			{
				href: "https://blog.josequinto.com",
				text: "Menu Item 2",
				title: "Menu Item title 2"
			},
			{
				href: "/josequinto",
				text: "Menu Item 3",
				title: "Menu Item title 3"
			},
			{
				href: "/section1",
				text: "Menu Item 4",
				title: "Menu Item title 4"
			},
			{
				href: "/section5",
				text: "Menu Item 5",
				title: "Menu Item title 5"
			},
			{
				href: "/section6",
				text: "Menu Item 6",
				title: "Menu Item title 6"
			}
		]
	}
}