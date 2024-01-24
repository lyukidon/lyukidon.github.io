---
title: 'create()와 save()의 차이'
image: ''
alt: 'Urara'
created: 2024-01-23
updated: 2024-01-23
tags:
  - mongodb
  - mongoose
---

POST를 사용하여 데이터를 추가할 때, create()와 save() API를 사용하게 된다. 다른 기능을 사용해도 같은 결과가 나와서 궁금해서 찾아보았다.

[https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create](https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create)

`The .save() is an instance method of the model, while the .create() is called directly from the Model as a method call, being static in nature, and takes the object as a first parameter.`

- save()

  - save는 instance 메서드로, 객체를 직접 형성해준 후 몽고디비에 저장하는 형식이다.

  ```js
  const Person = mongoose.model(
    'Person',
    Schema({
      name: String,
      age: Number
    })
  )

  let newPerson = new Person({
    name: 'jack',
    age: 30
  })

  await newPerson.save()
  ```

- create()

  - create는 static 메서드로, 객체를 따로 생성하지 않아도 호출을 할 수 있다. create 내부에 생성하고자 하는 데이터를 넣어주면, mongodb에 저장이 된다.

  ```js
  const Person = mongoose.model(
    'Person',
    Schema({
      name: String,
      age: Number
    })
  )

  await Person.create({ name: 'jack', age: 30 })
  ```
