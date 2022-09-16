import imageUrlBuilder from "@sanity/image-url";

  const getPosts = async (customQuery = undefined) => {

	const query = encodeURIComponent(customQuery || '*[_type == "post"]');
	const url = `https://p3umg9xf.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then(res => res.json());

	const posts = result.result
	if (!posts || !posts.length) {
		return [];
	}

	const imgBuilder = imageUrlBuilder({
		projectId: 'p3umg9xf',
		dataset: 'production'
	});

	return posts.map(post => {
		return {
			...post,
			mainImage: imgBuilder.image(post.mainImage).url(),
		}
	});
}

export default getPosts;
