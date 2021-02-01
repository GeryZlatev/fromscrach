function createProduct(data) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
}