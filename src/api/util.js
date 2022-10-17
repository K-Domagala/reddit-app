import snekfetch from 'snekfetch';

const reddit = {
    memes: {
        title: 'The r/memes page',
        img: 'https://m.media-amazon.com/images/I/41vEq3aJaxL._AC_.jpg'
    },
    rareinsults: {
        title: 'The r/rareinsults page',
        img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg'
    },
    CasualUK: {
        title: 'The r/CasualUK page',
        img: 'https://i.pinimg.com/564x/4e/c4/f2/4ec4f2d69c9bc6b152abcb420252c3a8.jpg'
    }
}

const url = '';

export const updateMemeUtil = (searchTerm) => {
    if([searchTerm]){
        return reddit[searchTerm];
    } else {
        return {
            title: 'Default',
            img: '../logo.svg'
        }
    }
}

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
        // console.log(title);
        // console.log(img);
        return {title, img};
    } catch (err) {
        console.log(err);
        return {title: '', img: ''};
    }
}