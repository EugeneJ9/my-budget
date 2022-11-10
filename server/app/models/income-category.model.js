module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      description: String,
      userId: String,
      archived: Boolean,
      deleted: Boolean,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const IncomeCategory = mongoose.model('incomeCategory', schema);

  return IncomeCategory;
};
