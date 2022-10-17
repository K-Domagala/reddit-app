import snekfetch from 'snekfetch';

export const fetchMeme = async (value, method) => {
    let path = '';
    if(method==='subreddit'){
        path = 'https://www.reddit.com/r/' + value + '.json';
    } else {
        path = 'https://www.reddit.com/search/.json?q=' + value;
    }
	try {
        const {body} = await snekfetch.get(path);
        const allowed = body.data.children.filter(post => !post.data.over_18);
        const memes = allowed.filter(post => {
            let ext = post.data.url.slice(-4);
            return (ext==='.jpg'||ext==='.png');
        });
        const randomnumber = Math.floor(Math.random() * memes.length);
        let title = memes[randomnumber].data.title;
        let img = memes[randomnumber].data.url;
        console.log(path + value);
        return {title, img};
    } catch (err) {
        console.log(err);
        return {title: '', img: ''};
    }
}