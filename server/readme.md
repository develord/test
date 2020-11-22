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