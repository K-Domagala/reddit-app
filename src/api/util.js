import snekfetch from 'snekfetch';

export const fetchMeme = async (subreddit) => {
	try {
        const {body} = await snekfetch.get('https://www.reddit.com/r/' + subreddit + '.json');
        const allowed = body.data.children.filter(post => !post.data.over_18);
        const memes = allowed.filter(post => {
            let ext = post.data.url.slice(-4);
            return (ext=='.jpg'||ext=='.png');
        });
        const randomnumber = Math.floor(Math.random() * memes.length);
        let title = memes[randomnumber].data.title;
        let img = memes[randomnumber].data.url;
        return {title, img};
    } catch (err) {
        console.log(err);
        return {title: '', img: ''};
    }
}