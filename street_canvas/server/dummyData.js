import Post from './models/post';
import Photo from './models/Photo';

export default function () {
  Photo.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const photo1 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491414710/IMG_20170214_125605_iytljf.jpg',
      description: 'Anatomical bat by Austrian surgeon/street artist, Nychos', lat: '37.7875099', lng: '-122.397319', cuid: 'cikqgkv4q01ck7453ualdn7fq' });
    const photo2 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491454814/dreams_boukn2.jpg',
      description: 'You don\'t have dreams, you make them', lat: '37.758', lng: '-122.419', cuid: 'cikqgkv4q01ck7453uald3tgsreh' });
    const photo3 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491454813/morning_stairwell_2_bottom_y19gxa.jpg',
      description: 'Mosaic stairs', lat: '37.756279', lng: '-122.4756077', cuid: 'cikqgkv4q01ck7453uaadfabe' });
    const photo4 = new Photo({
      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491454815/fire_steel_xxg1nw.jpg',
      description: 'Steel and Fire', lat: '37.806', lng: '-122.269', cuid: 'cikqgkv4q01ck7453ualsg34t' });

    Photo.create([photo4, photo3, photo2, photo1], (error) => {
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
