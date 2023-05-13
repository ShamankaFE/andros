const QUESTIONS = [
  {
    id: '1',
    text: 'I have strong beliefs about what is right and wrong, good and bad.'
  },
  {
    id: '2',
    text: 'I often act without considering the possible consequences.'
  },
  {
    id: '3',
    text: 'I tend to solve problems using a step-by-step approach.'
  },
  {
    id: '4',
    text: 'I believe that formal procedures and policies restrict people.'
  },
  {
    id: '5',
    text: 'I have a reputation for saying what I think, simply and directly.'
  },
  {
    id: '6',
    text: 'I often find that actions based on feelings are as sound as those based on careful thought and analysis.'
  },
  {
    id: '7',
    text: 'I like the sort of work where I have time for thorough preparation and implementation.'
  },
  {
    id: '8',
    text: 'I regularly question people about their basic assumptions.'
  },
  {
    id: '9',
    text: 'What matters most is whether something works in practice.'
  },
  {
    id: '10',
    text: 'I actively seek out new experiences.'
  },
  {
    id: '11',
    text: 'When I hear about a new idea or approach, I immediately start working out how to apply it in practice.'
  },
  {
    id: '12',
    text: 'I am keen on self discipline such as watching my diet, taking regular exercise, sticking to a fixed routine, etc.'
  },
  {
    id: '13',
    text: 'I take pride in doing a thorough job.'
  },
  {
    id: '14',
    text: `I get on best with logical, analytical people and less well with spontaneous, 'irrational' people.`
  },
  {
    id: '8',
    text: 'I regularly question people about their basic assumptions.'
  },
  {
    id: '15',
    text: 'I take care over how I interpret data and avoid jumping to conclusions.'
  },
  {
    id: '16',
    text: 'I like to reach a decision carefully after weighing up many alternatives.'
  },
  {
    id: '17',
    text: 'I am attracted more to novel, unusual ideas than to practical ones.'
  },
  {
    id: '18',
    text: `I don't like disorganised things and prefer to fit things into a coherent pattern.`
  },
  {
    id: '19',
    text: 'I accept and stick to laid down procedures and policies so long as I regard them as an efficient way of getting the job done.'
  },
  {
    id: '20',
    text: 'I like to relate my actions to a general principle, standard or belief.'
  },
  {
    id: '21',
    text: 'In discussions, I like to get straight to the point.'
  },
  {
    id: '22',
    text: 'I tend to have distant, rather formal relationships with people at work.'
  },
  {
    id: '23',
    text: 'I thrive on the challenge of tackling something new and different.'
  },
  {
    id: '24',
    text: 'I enjoy fun-loving spontaneous people.'
  },
  {
    id: '25',
    text: 'I pay careful attention to detail before coming to a conclusion.'
  },
  {
    id: '26',
    text: 'I find it difficult to produce ideas on impulse.'
  },
  {
    id: '27',
    text: 'I believe in coming to the point immediately.'
  },
  {
    id: '28',
    text: 'I am careful not to jump to conclusions too quickly.'
  },
  {
    id: '29',
    text: 'I prefer to have as many sources of information as possible - the more information to think over the better.'
  },
  {
    id: '30',
    text: `Flippant, superficial people who don't take things seriously enough usually irritate me.`
  },
  {
    id: '31',
    text: `I listen to other people's points of view before putting my own view forward.`
  },
  {
    id: '32',
    text: `I tend to be open about how I'm feeling.`
  },
  {
    id: '33',
    text: 'In discussions, I enjoy watching the plotting and scheming of the other participants.'
  },
  {
    id: '34',
    text: 'I prefer to respond to events in a spontaneous, flexible way rather than plan things out in advance.'
  },
  {
    id: '35',
    text: 'I tend to be attracted to techniques such as flow charts, contingency plans etc.'
  },
  {
    id: '36',
    text: 'It worries me if I have to rush work to meet a tight deadline.'
  },
  {
    id: '37',
    text: `I tend to judge people's ideas on their practical merits.`
  },
  {
    id: '38',
    text: 'Quiet, thoughtful people tend to make me feel uneasy.'
  },
  {
    id: '39',
    text: 'I often get irritated by people who want to rush things.'
  },
  {
    id: '40',
    text: 'It is more important to enjoy the present moment than to think about he past or future.'
  },
  {
    id: '41',
    text: 'I think that decisions based on a careful analysis of all the information are better than those based on intuition.'
  },
  {
    id: '42',
    text: 'I tend to be a perfectionist.'
  },
  {
    id: '43',
    text: 'In discussions, I usually produce lots of spontaneous ideas.'
  },
  {
    id: '44',
    text: 'In meetings, I put forward practical, realistic ideas.'
  },
  {
    id: '45',
    text: 'More often than not, rules are there to be broken.'
  },
  {
    id: '46',
    text: 'I prefer to stand back from a situation and consider all the perspectives.'
  },
  {
    id: '47',
    text: `I can often see inconsistencies and weaknesses in other people's arguments`
  },
  {
    id: '48',
    text: 'On balance I talk more than I listen.'
  },
  {
    id: '49',
    text: 'I can often see better, more practical ways to get things done.'
  },
  {
    id: '50',
    text: 'I think written reports should be short and to the point.'
  },
  {
    id: '51',
    text: 'I believe that rational, logical thinking should win the day.'
  },
  {
    id: '52',
    text: 'I tend to discuss specific things with people rather than engaging in social discussion.'
  },
  {
    id: '53',
    text: 'I like people who approach things realistically rather than theoretically.'
  },
  {
    id: '54',
    text: 'In discussions, I get impatient with irrelevant issues and digressions.'
  },
  {
    id: '55',
    text: 'If I have a report to write, I tend to produce lots of drafts before settling on the final version.'
  },
  {
    id: '56',
    text: 'I am keen to try things out to see if they work in practice.'
  },
  {
    id: '57',
    text: 'I am keen to reach answers via a logical approach.'
  },
  {
    id: '58',
    text: 'I enjoy being the one that talks a lot.'
  },
  {
    id: '59',
    text: 'In discussions, I often find I am a realist, keeping people to the point and avoiding wild speculations.'
  },
  {
    id: '60',
    text: 'I like to ponder many alternatives before making up my mind.'
  },
  {
    id: '61',
    text: 'In discussions with people I often find I am the most dispassionate and objective.'
  },
  {
    id: '62',
    text: `In discussions I'm more likely to adopt a 'low profile' than to take the lead and do most of the talking.`
  },
  {
    id: '63',
    text: 'I like to be able to relate current actions to the longer-term bigger picture.'
  },
  {
    id: '64',
    text: `When things go wrong, I am happy to shrug it off and 'put it down to experience.`
  },
  {
    id: '65',
    text: 'I tend to reject wild, spontaneous ideas as being impractical.'
  },
  {
    id: '66',
    text: `It's best to think carefully before taking action`
  },
  {
    id: '67',
    text: `On balance, I do the listening rather than the talking`
  },
  {
    id: '68',
    text: 'I tend to be tough on people who find it difficult to adopt a logical approach.'
  },
  {
    id: '69',
    text: 'Most times I believe the end justifies the means.'
  },
  {
    id: '70',
    text: `I don't mind hurting people's feelings so long as the job gets done.`
  },
  {
    id: '71',
    text: `I find the formality of having specific objectives and plans stifling.`
  },
  {
    id: '72',
    text: `I'm usually one of the people who puts life into a party.`
  },
  {
    id: '73',
    text: `I do whatever is practical to get the job done.`
  },
  {
    id: '74',
    text: `I quickly get bored with methodical, detailed work.`
  },
  {
    id: '75',
    text: `I am keen on exploring the basic assumptions, principles and theories underpinning things and events.`
  },
  {
    id: '76',
    text: `I'm always interested to find out what people think.`
  },
  {
    id: '77',
    text: `I like meetings to be run on methodical lines, sticking to laid down agenda.`
  },
  {
    id: '78',
    text: `I steer clear of subjective (biased) or ambiguous (unclear) topics.`
  },
  {
    id: '79',
    text: `I enjoy the drama and excitement of a crisis situation.`
  },
  {
    id: '80',
    text: `People often find me insensitive to their feelings.`
  }
];

const ACTIVIST_CHOICES = [2, 4, 6, 10, 17, 23, 24, 32, 34, 38, 40, 43, 45, 48, 58, 64, 71, 72, 74, 79];
const REFLECTOR_CHOICES = [7, 13, 15, 16, 25, 28, 29, 31, 33, 36, 39, 41, 46, 52, 55, 60, 62, 66, 67, 76];
const THEORIST_CHOICES = [1, 3, 8, 12, 14, 18, 20, 22, 26, 30, 42, 47, 51, 57, 61, 63, 68, 75, 77, 78];
const PRAGMATIST_CHOICES = [5, 9, 11, 19, 21, 27, 35, 37, 44, 49, 50, 53, 54, 56, 59, 65, 69, 70, 73, 80];

export { QUESTIONS, ACTIVIST_CHOICES, REFLECTOR_CHOICES, THEORIST_CHOICES, PRAGMATIST_CHOICES };
