export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      Validition: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category'
    }
  ],
}
