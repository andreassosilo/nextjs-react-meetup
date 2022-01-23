import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://www.tripsavvy.com/thmb/vH1qnFyjFWkNrx9LgGWabSoq98c=/1414x1414/smart/filters:no_upscale()/GettyImages-962642536-33584e0b843c4c2ba25e7e7922c97745.jpg',
    address: 'Some address 5, 12345 Munich',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://www.tripsavvy.com/thmb/vH1qnFyjFWkNrx9LgGWabSoq98c=/1414x1414/smart/filters:no_upscale()/GettyImages-962642536-33584e0b843c4c2ba25e7e7922c97745.jpg',
    address: 'Some address 5, 12345 Munich',
    description: 'This is a second meetup!',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://www.tripsavvy.com/thmb/vH1qnFyjFWkNrx9LgGWabSoq98c=/1414x1414/smart/filters:no_upscale()/GettyImages-962642536-33584e0b843c4c2ba25e7e7922c97745.jpg',
    address: 'Some address 5, 12345 Munich',
    description: 'This is a third meetup!',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
