# ADD CATEGORY #
```
mutation {
	createCategory(name: "Lifetyle"),
	{name}
}
```
5fada613106f8a370c32c848 canRead
5fada665106f8a370c32c849 wanWrite
5fada682106f8a370c32c84a canDelete

5fada749106f8a370c32c84b permission admin

	createCategory(
    name: "test",
    h1: "my h1",
    title: "my title",
    componentName: "news",
    description: "my description",
    user: "5f1067cf51c11630708dc644",
    status: "5e7639fbf98c87dd31e3be39",
    link: "my link"
  ),
	{
    name
    h1
    title
    componentName
    description
    user {
      name
    }
    status {
      name
    }
    link
  }
}

# Update Category #
```
	mutation{createPost(
    title: "ttgh ghjs dfy sd",
    description: "vv",
    h1: "ttgh ghjs dfy sd",
    dateTag: "2029",
    content:null,
    image_large: "5fc56e0d0101bc2e94e9c0c2",
    image_small: "5fc56e0d0101bc2e94e9c0c2",
    link: "news/ttgh-ghjs-dfy-sd",
    user: "5fadbe45dc53340198b2cbac",
    category: "5fc6c61dc64380458091c11a",
    status: "5fadac52dc53340198b2cba8",
    componentName: "news"
  ),
	{
    title
    h1
    title
    componentName
    dateTag
    description
    user {
      _id
    }
    status {
      _id
    }
    link
  }
}
mutation {
  updateCategory(
    _id: "5e74da81d1883d569f733da2"
    data: { name: "Updated Category", desc: "updated Category" }
  )
}
```

# Delete Category #
```
mutation {
 deleteCategory(_id: "5e74a32de6736533681a0f7a")
}
```

# GET Categories #
```
{
  categories {
    name
    _id
  }
}
```
# GET ONE CATEGORY #
```
{
	category(name: "cat2") {
		name
		desc
	}
}
```


1. fix find method
   1. We need to fetch the resource by its _id
   
2. Fix update method