module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      description: String,
      userId: String,
      categoryId: String,
      archived: Boolean,
      deleted: Boolean,
      value: Number,
      currency: String,
      date: Date,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const Income = mongoose.model('income', schema);

  return Income;
};
