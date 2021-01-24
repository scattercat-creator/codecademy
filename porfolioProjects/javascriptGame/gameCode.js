const goodVibesSuccess = ['I am successful.', 'I am a magnet for success.',
    'Love, health and success are attracted to me.',
    'I have unstoppable confidence within me.',
    'Life just feels great all of the time.',
    'There is always a way if I am committed.',
    'I am so excited because all of my dreams are coming true.',
    'Great things always seem to come my way.',
    'I am a naturally happy person.',
    'I am a naturally confident person.',
    'Opportunities just seem to fall right into my lap.',
    'I am full of energy and life.',
    'I am a good person who deserves success and happiness.',
    'I love myself for who I am.',
    'Everything always works out for me.'];

const goodVibesLove = ['The universe is bringing my soulmate to me!',   
    'I deserve mind-blowing passion in my relationship.',
    'I will be in a wonderful relationship with someone who treats me right!',
    'I deserve love and affection.',
    'I am attracting the perfect person for me.',
    'I love who I am, and so will partner.',
    'I am worthy of a healthy, loving relationship.',
    'I deserve to be happy in my relationships.',
    'I am overwhelmed with love!',
    'I love myself.',
    'I am open to love.',
    'I am surrounded by love.',
    'I trust the Universe to bring my true love to me.',
    'I will be in the healthiest relationship of my life!',
    'I allow the Universe to help me find love.',
    'I am swept up in romance!'];

const goodVibesHappy = ['I have the power to shape my ideal reality.',
    'I create the life I desire with my good feelings.',
    'Everything is always working out well for me.',
    'When I feel happy I manifest more reasons to be happy.',
    'I am willing to be happy now.',
    'I accept that happiness is my true nature.',
    'I am worthy of feeling happy.',
    'My happiness comes from within me.',
    'I create my happiness by accepting every part of myself with unconditional love.',
    'Joy is the essence of my being.',
    'I see so many positives in my life.',
    'I am constantly creating everything my heart desires.',
    'I experience joy in everything I do.',
    'I feel happy with myself as a person.',
    'I give myself permission to enjoy myself.'];

function chooseGoodVibes() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        return goodVibesSuccess;
    } else if(choice == 1) {
        return goodVibesLove;
    } else if(choice == 2) {
        return goodVibesHappy;
    }
}

function chooseMessage() {
    const messageArray = chooseGoodVibes();
    let num = Math.floor(Math.random() * 15);
    return messageArray[num];
}

console.log(chooseMessage());