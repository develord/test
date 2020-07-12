# ADD CATEGORY #
```
mutation {
	createCategory(name: "Lifetyle"),
	{name}
}
```

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