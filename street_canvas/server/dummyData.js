import Post from './models/post';
import Photo from './models/Photo';

export default function () {
  Photo.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const photo1 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491414710/IMG_20170214_125605_iytljf.jpg',
      description: 'Anatomical bat by Austrian surgeon/street artist, Nychos', lat: '37.7875099', lng: '-122.397319', cuid: 'cikqgkv4q01ck7453ualdn7fq' });
    const photo2 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491454814/dreams_boukn2.jpg',
      description: 'You don\'t have dreams, you make them', lat: '37.758', lng: '-122.419', cuid: 'cikqgkv4q01ck7453uald3tgsreh' });
    const photo3 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491454813/morning_stairwell_2_bottom_y19gxa.jpg',
      description: 'Mosaic stairs', lat: '37.756279', lng: '-122.4756077', cuid: 'cikqgkv4q01ck7453uaadfabe' });
    const photo4 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491454815/fire_steel_xxg1nw.jpg',
      description: 'Steel and Fire', lat: '37.806', lng: '-122.269', cuid: 'cikqgkv4q01ck7453ualsg34t' });
    const photo5 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672367/20170406_081026_zhxmx4.jpg',
      description: 'Rest in Pride burger head', lat: '37.7807641', lng: '-122.4058703', cuid: 'cikqgkv4q01ck56whwhtth4ah' });
    const photo6 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672374/IMG_20170407_181345_rmh8hp.jpg',
      description: 'Blue Gray into the mind of madness', lat: '37.772', lng: '-122.432', cuid: 'cikqgkv4q01ckjkkyh3kh35k64' });
    const photo7 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672367/IMG_20170407_181526_iyheav.jpg',
      description: 'Smiling woman and happy people', lat: '37.772', lng: '-122.433', cuid: 'cikqgagahgagh46kjkkyh3kh35k64' });
    const photo8 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672342/20170406_081116_q7osbs.jpg',
      description: 'Bunny Kitty', lat: '37.7850441', lng: '-122.4059089', cuid: 'cadgfag4gagh46kjkkyh3kh35k64' });
    const photo9 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672348/IMG_20170407_182703_aptmub.jpg',
      description: 'Summer of Love', lat: '37.77', lng: '-122.445', cuid: '533treteragh46kjkkyh3kh35k64' });
    const photo10 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672370/20170406_081001_sgm9ye.jpg',
      description: 'Beautiful woman piece defaced', lat: '37.780920', lng: '-122.405878', cuid: '533treteragh46kjkkyags4tnk64' });
    const photo11 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/q_auto:good/v1491672365/IMG_1833_lqgzuh.jpg',
      description: 'Rogue One', lat: '37.7752018', lng: '-122.4195165', cuid: '533treteragh46kjkafds535364' });
    const photo12 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672322/IMG_1825_duxhfu.jpg',
      description: 'Honey Bears Divisidero and Oak', lat: '37.772882', lng: '-122.438734', cuid: '533treteragh46kjagsgarw535364' });
    const photo14 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672324/IMG_1831_ilhqlr.jpg',
      description: 'Bluebird of happiness by the underground stop', lat: '37.775149', lng: '-122.419870', cuid: '533treteasgah6sgarw535364' });
    const photo15 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672368/20170406_081103_xwjazd.jpg',
      description: 'Eagle', lat: '37.7809643', lng: '-122.405793', cuid: '533treteasgagkity09064' });
    const photo16 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672362/IMG_20170407_181439_n8kh9f.jpg',
      description: 'Fantasy woman in Lower Haight', lat: '37.772', lng: '-122.433', cuid: '533treteasdhgfhdgagkity09064' });
    const photo17 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672322/IMG_1829_u5qrfm.jpg',
      description: 'Dragon Lantern Ladies', lat: '37.7751366', lng: '-122.419619', cuid: '533tretadfagdghahgdgagkity09064' });
    const photo18 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672373/IMG_20170407_183014_kkbrre.jpg',
      description: 'Side of a Burger Joint', lat: '37.77', lng: '-122.449', cuid: '533tretadfagdghahgdgagkfadgagah' });

    Photo.create([photo1, photo5, photo4, photo3, photo6, photo9, photo10, photo7, photo8, photo9, photo11, photo12, photo14, photo15, photo16, photo17, photo2, photo18], (error) => {
      if (!error) {
      }
    });
  });
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum`;

    const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet.`;

    const post1 = new Post({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
