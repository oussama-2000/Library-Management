import { createSlice } from "@reduxjs/toolkit";

//=========================== import images =====================
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import b5 from "../images/b5.jpg";
import b6 from "../images/b6.jpg";
import b7 from "../images/b7.jpg";
import b8 from "../images/b8.jpg";
import b9 from "../images/b9.jpg";
import b10 from "../images/b10.jpg";
import b11 from "../images/b11.jpg";
import b12 from "../images/b12.jpg";
import b13 from "../images/b13.jpg";
import b14 from "../images/b14.jpg";
import b15 from "../images/b15.jpg";
import b16 from "../images/b16.jpg";
import b17 from "../images/b17.jpg";
import b18 from "../images/b18.jpg";
import b19 from "../images/b19.jpg";
import b20 from "../images/b20.jpg";
import b21 from "../images/b21.jpg";
// import b22 from "../images/b22.jpg"
import b23 from "../images/b23.jpg";
import b24 from "../images/b24.jpg";
import b25 from "../images/b25.jpg";
import b26 from "../images/b26.jpg";
import b27 from "../images/b27.jpg";
import b28 from "../images/b28.jpg";
import b29 from "../images/b29.jpg";
import b30 from "../images/b30.jpg";
import b31 from "../images/b31.jpg";
import b32 from "../images/b32.jpg";
//=============================================================

//================== import documents =========================
import d_default from "../documents/b1.pdf";
import d1 from "../documents/b2.pdf";
import d3 from "../documents/b3.pdf";
import d4 from "../documents/b4.pdf";
//============================================================

const initialState = {
  books: [
    // trending books

    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publish_date: "June 26, 1997",
      publish_place: "London, United Kingdom",
      publisher: "Bloomsbury",
      ISBN: "9780747532743",
      language: "English",
      pages: "223",
      synopsis:
        "The story follows Harry Potter, an orphaned boy, who learns on his eleventh birthday that he is a wizard. He attends Hogwarts School of Witchcraft and Wizardry, where he discovers his destiny while battling the dark wizard Voldemort.",

      reviews: [
        { stars: 5, comment: "Magical and captivating!" },
        { stars: 3, comment: "A timeless tale of wonder and courage." },
      ],

      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b1,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 2,
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      genre: "Self-help",
      publish_date: "October 1936",
      publish_place: "New York, USA",
      publisher: "Simon and Schuster",
      ISBN: "9780671027032",
      language: "English",
      pages: "291",
      synopsis:
        "This classic self-help book provides practical advice on building better relationships, influencing people positively, and achieving success in life through effective communication and empathy.",

      reviews: [
        {
          stars: 5,
          comment:
            "Life-changing advice for personal and professional relationships!",
        },
        {
          stars: 4,
          comment: "Timeless principles for effective communication.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b2,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 3,
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      genre: "Tragedy",
      publish_date: "1597",
      publish_place: "London, England",
      publisher: "First published by John Danter",
      ISBN: "N/A (public domain)",
      language: "English",
      pages: "Approximately 120 (varies by edition)",
      synopsis:
        "This iconic tragedy tells the story of two young lovers, Romeo and Juliet, whose love is forbidden due to the feud between their families, the Montagues and Capulets. Their ill-fated romance leads to devastating consequences, underscoring themes of love, fate, and conflict.",

      reviews: [
        { stars: 5, comment: "A timeless masterpiece about love and tragedy." },
        { stars: 4, comment: "Beautifully written but heartbreaking." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b3,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 4,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      genre: "Psychology, Behavioral Economics",
      publish_date: "October 25, 2011",
      publish_place: "New York, USA",
      publisher: "Farrar, Straus and Giroux",
      ISBN: "9780374275631",
      language: "English",
      pages: "499",
      synopsis:
        "Nobel laureate Daniel Kahneman explores the two systems that drive human thought: System 1, which is fast, intuitive, and emotional, and System 2, which is slower, more deliberate, and logical. The book delves into how these systems influence decision-making, judgement, and the errors humans frequently make due to cognitive biases.",

      reviews: [
        {
          stars: 5,
          comment: "A profound exploration of human thought processes.",
        },
        {
          stars: 4,
          comment: "Insightful but requires careful reading to grasp fully.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b4,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 5,
      title: "'Salem’s Lot",
      author: "Stephen King",
      genre: "Horror, Gothic Fiction",
      publish_date: "October 17, 1975",
      publish_place: "United States",
      publisher: "Doubleday",
      ISBN: "9780385007511",
      language: "English",
      pages: "439",
      synopsis:
        "'Salem’s Lot follows Ben Mears, a writer who returns to his childhood town of Jerusalem’s Lot to write a book about the mysterious and supposedly haunted Marsten House. However, he soon discovers that the town is being taken over by vampires, led by the sinister Kurt Barlow. As the horror unfolds, Ben and a small group of allies must fight to save themselves and the town.",

      reviews: [
        { stars: 5, comment: "A chilling masterpiece of horror!" },
        {
          stars: 4,
          comment: "Stephen King at his best, terrifying and gripping.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b5,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 6,
      title: "The Courage to Be Disliked",
      author: "Ichiro Kishimi & Fumitake Koga",
      genre: "Self-Improvement, Motivational & Inspirational",
      publish_date: "May 7, 2024",
      publish_place: "United States",
      publisher: "Atria Books",
      ISBN: "9781668065969",
      language: "English",
      pages: "288",
      synopsis:
        "This book is based on the psychological theories of Alfred Adler and presents its lessons through a dialogue between a philosopher and a young man. It explores themes of self-forgiveness, personal freedom, and achieving happiness by overcoming social expectations and past burdens.",

      reviews: [
        {
          stars: 5,
          comment: "An enlightening perspective on personal growth!",
        },
        {
          stars: 4,
          comment: "A fascinating dialogue on self-improvement and psychology.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b6,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 7,
      title: "Unfuck Your Brain",
      author: "Dr. Faith G. Harper",
      genre: "Self-Help, Psychology, Mental Health",
      publish_date: "October 1, 2017",
      publish_place: "United States",
      publisher: "Microcosm Publishing",
      ISBN: "9781621063049",
      language: "English",
      pages: "192",
      synopsis:
        "Unfuck Your Brain offers a no-nonsense, science-based approach to understanding and managing anxiety, depression, anger, and trauma. Dr. Faith G. Harper explains how the brain processes emotions, how past experiences shape reactions, and how to rewire thought patterns using neuroscience-backed strategies.",

      reviews: [
        {
          stars: 5,
          comment:
            "An insightful, funny, and practical guide to mental health.",
        },
        {
          stars: 4,
          comment:
            "Straightforward, science-backed, and full of useful techniques.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b7,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 8,
      title: "Man’s Search for Meaning: Young Adult Edition",
      author: "Viktor E. Frankl",
      genre: "Autobiography, Psychology, Holocaust Memoir",
      publish_date: "April 15, 2017",
      publish_place: "United States",
      publisher: "Beacon Press",
      ISBN: "9780807067994",
      language: "English",
      pages: "200",
      synopsis:
        "An abridged edition of Viktor Frankl’s classic memoir and psychological work, tailored for young readers. The book recounts Frankl’s experiences in Nazi concentration camps and explores his philosophy of finding meaning in suffering. This edition includes a foreword by John Boyne, a glossary, a chronology of Frankl’s life, and selected writings.",

      reviews: [
        {
          stars: 5,
          comment: "A deeply moving and insightful read for young audiences.",
        },
        {
          stars: 4,
          comment: "A powerful introduction to Frankl’s philosophy.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b8,
      category: "trending books",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },

    // classic books
    {
      id: 9,
      title: "A Servant of Reality",
      author: "Phyllis Bottome",
      genre: "Literary Fiction",
      publish_date: "1919",
      publish_place: "United States",
      publisher: "Century",
      ISBN: "9781341427411",
      language: "English",
      pages: "482",
      synopsis:
        "A Servant of Reality is a novel by Phyllis Bottome that explores deep philosophical and humanistic themes. Bottome, known for her works focusing on psychology and human nature, weaves a narrative that examines the conflicts between personal ideals and external realities.",

      reviews: [
        { stars: 4, comment: "A thought-provoking and insightful novel." },
        {
          stars: 4,
          comment: "Bottome's writing is engaging and deeply reflective.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b9,
      category: "classic books",
      document: d1,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 10,
      title: "Le Crime de Sylvestre Bonnard",
      author: "Anatole France",
      genre: "Fiction, Mystery, Literary",
      publish_date: "1890",
      publish_place: "France",
      publisher: "Calmann Lévy",
      ISBN: "",
      language: "French",
      pages: "310",
      synopsis:
        "Le Crime de Sylvestre Bonnard suit les aventures d'un vieil érudit et collectionneur de livres, Sylvestre Bonnard. Il découvre un manuscrit rare, ce qui l'entraîne dans un voyage marqué par des dilemmes moraux et des rencontres inattendues. Le roman explore la solitude, l'amour des livres et les conflits entre la conscience et la passion.",
      reviews: [
        { stars: 4, comment: "Un roman fascinant sur la passion des livres." },
        {
          stars: 5,
          comment: "Une œuvre touchante et poétique d'Anatole France.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b10,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 11,
      title: "A Chapter of Adventures",
      author: "Ernest Richard Suffling",
      genre: "Adventure",
      publish_date: "1891",
      publish_place: "United Kingdom",
      publisher: "Cassell & Company",
      ISBN: "N/A",
      language: "English",
      pages: "Unknown",
      synopsis:
        "A thrilling adventure story by Ernest Richard Suffling, detailing the exciting journeys and experiences of its characters.",
      reviews: [
        {
          stars: 4,
          comment: "A fascinating adventure with well-described settings.",
        },
        { stars: 3, comment: "An interesting read, but a bit dated in style." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b11,
      category: "classic books",
      document: d4,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 12,
      title: "Guns on the High Mesa",
      author: "Louis L'Amour",
      genre: "Western",
      publish_date: "1981",
      publish_place: "United States",
      publisher: "Bantam Books",
      ISBN: "9780553277011",
      language: "English",
      pages: "256",
      synopsis:
        "A gripping tale of justice and honor, 'Guns on the High Mesa' follows the story of a man named Dusty Fog who becomes a hero in the Old West, navigating the harsh landscapes and moral dilemmas that come with the territory.",
      reviews: [
        {
          stars: 5,
          comment:
            "A classic Western story with plenty of action and suspense!",
        },
        { stars: 4, comment: "A thrilling ride from start to finish." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b12,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 13,
      title: "Paths of the Righteous",
      author: "Hugh Stowell Scott",
      genre: "Fiction",
      publish_date: "1905",
      publish_place: "United States",
      publisher: "Dodd, Mead & Co.",
      ISBN: "9781419107956",
      language: "English",
      pages: "364",
      synopsis:
        "In 'Paths of the Righteous', Scott explores the moral dilemmas and complex relationships that define human choices, set against a background of societal expectations and personal ambitions. The narrative is a reflection on virtue and vice and their impact on one's life journey.",
      reviews: [
        {
          stars: 4,
          comment: "A thoughtful exploration of the human condition.",
        },
        {
          stars: 4,
          comment: "Engaging and insightful, with rich character development.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b13,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 14,
      title: "In Kedar's Tents",
      author: "Hugh Stowell Scott",
      genre: "Historical Fiction",
      publish_date: "1905",
      publish_place: "United States",
      publisher: "Dodd, Mead & Co.",
      ISBN: "9781419108014",
      language: "English",
      pages: "300",
      synopsis:
        "This novel is set in the East, focusing on a group of Englishmen who are caught in the turmoil of cultural and political upheaval. 'In Kedar's Tents' explores themes of duty, identity, and love against the backdrop of the Middle East.",
      reviews: [
        {
          stars: 4,
          comment:
            "A captivating historical drama with deep cultural insights.",
        },
        { stars: 4, comment: "Richly textured and thought-provoking." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b14,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 15,
      title: "The Market-Place",
      author: "Harold Frederic",
      genre: "Fiction",
      publish_date: "1893",
      publish_place: "United States",
      publisher: "Harper & Brothers",
      ISBN: "9781536816346",
      language: "English",
      pages: "456",
      synopsis:
        "The Market-Place is a novel of social realism, telling the story of a man who must navigate the complexities of love, marriage, and morality in the context of the bustling marketplace of a small town. The novel examines personal ambition and the consequences of individual choices in a growing industrial society.",
      reviews: [
        {
          stars: 4,
          comment: "A gripping look at society and personal dilemmas.",
        },
        {
          stars: 4,
          comment: "An insightful exploration of human relationships.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b15,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 16,
      title: "The Norths Meet Murder",
      author: "Frances Louise Davis Lockridge, Richard Lockridge",
      genre: "Mystery, Crime Fiction",
      publish_date: "1939",
      publish_place: "United States",
      publisher: "Farrar & Rinehart",
      ISBN: "9780879726143",
      language: "English",
      pages: "256",
      synopsis:
        "In this debut novel, the Norths, a married couple, get caught up in solving a murder when a mysterious death occurs in their community. Their investigation leads them through a series of intriguing twists and turns, as they uncover secrets and confront danger in a classic murder mystery.",
      reviews: [
        { stars: 4, comment: "A well-crafted, fast-paced whodunit." },
        { stars: 4, comment: "Engaging characters and an intriguing mystery." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b16,
      category: "classic books",
      document: d_default,
      to: "read",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },

    // Books We Love
    {
      id: 17,
      title: "Faceless Killers",
      author: "Henning Mankell",
      genre: "Crime, Mystery, Thriller",
      publish_date: "1991",
      publish_place: "Sweden",
      publisher: "Wahlström & Widstrand",
      ISBN: "9781569473242",
      language: "Swedish",
      pages: "296",
      synopsis:
        "In the first book of the Kurt Wallander series, a gruesome double murder occurs in a small Swedish village. Inspector Wallander is called to investigate the case, which unravels a deeper mystery involving xenophobia, police corruption, and a web of secrets. The novel explores the complexities of human nature and justice.",
      reviews: [
        { stars: 5, comment: "A gripping and thought-provoking crime novel." },
        {
          stars: 4,
          comment: "A masterful introduction to the Wallander series.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b17,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 18,
      title: "The Time Machine",
      author: "H.G. Wells",
      genre: "Science Fiction, Adventure",
      publish_date: "1895",
      publish_place: "United Kingdom",
      publisher: "William Heinemann",
      ISBN: "9780451530262",
      language: "English",
      pages: "128",
      synopsis:
        "A scientist, known only as 'The Time Traveller,' invents a machine that allows him to travel through time. He ventures to the distant future, where he encounters two distinct races, the Eloi and the Morlocks, leading to an exploration of humanity, survival, and society's evolution.",
      reviews: [
        {
          stars: 5,
          comment: "A visionary and timeless exploration of time travel.",
        },
        {
          stars: 4,
          comment: "Wells's work is groundbreaking and still relevant.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b18,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 19,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy, Adventure",
      publish_date: "September 21, 1937",
      publish_place: "United Kingdom",
      publisher: "George Allen & Unwin",
      ISBN: "9780547928227",
      language: "English",
      pages: "310",
      synopsis:
        "Bilbo Baggins, a quiet hobbit, embarks on an unexpected journey with a group of dwarves and the wizard Gandalf to reclaim treasure from the dragon Smaug. Along the way, Bilbo faces challenges and uncovers bravery within himself, setting the stage for his later adventures in the *Lord of the Rings* series.",
      reviews: [
        {
          stars: 5,
          comment: "A delightful fantasy journey that everyone should read.",
        },
        {
          stars: 4,
          comment: "Tolkien's world-building and imagination are unmatched.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b19,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 20,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romantic Fiction",
      publish_date: "January 28, 1813",
      publish_place: "United Kingdom",
      publisher: "T. Egerton, Whitehall",
      ISBN: "9781503290563",
      language: "English",
      pages: "432",
      synopsis:
        "Set in the early 19th century, the novel follows the life of Elizabeth Bennet as she navigates societal pressures, romance, and family expectations. When she meets the aloof Mr. Darcy, initial prejudice turns into mutual admiration and love. The story is a witty exploration of manners, marriage, and morality.",
      reviews: [
        {
          stars: 5,
          comment:
            "A timeless classic that brilliantly critiques societal norms.",
        },
        {
          stars: 4,
          comment: "Rich in character development and unforgettable dialogue.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b20,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 21,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      genre: "Gothic Fiction, Romance",
      publish_date: "December 1847",
      publish_place: "United Kingdom",
      publisher: "Thomas Cautley Newby",
      ISBN: "9780141439556",
      language: "English",
      pages: "400",
      synopsis:
        "The novel tells the intense and tragic story of the doomed love between Heathcliff and Catherine Earnshaw. Set on the remote Yorkshire moors, it explores themes of obsession, revenge, and the destructive power of love. Through its complex narrative, the book presents a profound commentary on class, family, and the nature of passion.",
      reviews: [
        {
          stars: 5,
          comment: "A haunting and deeply emotional tale of love and revenge.",
        },
        {
          stars: 4,
          comment: "An unforgettable gothic classic with complex characters.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b21,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 22,
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "Fantasy, Children's Literature",
      publish_date: "1865",
      publish_place: "United Kingdom",
      publisher: "Macmillan",
      ISBN: "9780451531263",
      language: "English",
      pages: "96",
      synopsis:
        "Alice's Adventures in Wonderland follows the curious Alice, who falls through a rabbit hole into a fantastical world. She encounters bizarre characters and situations that defy logic, making it a delightful exploration of imagination and absurdity. The novel is known for its playful use of language, riddles, and whimsical elements.",
      reviews: [
        {
          stars: 5,
          comment:
            "A delightful and imaginative classic, perfect for readers of all ages.",
        },
        {
          stars: 4,
          comment:
            "A surreal and entertaining adventure through a fantastical world.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b11,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 23,
      title: "The Sign of Four",
      author: "Arthur Conan Doyle",
      genre: "Mystery, Crime Fiction",
      publish_date: "1890",
      publish_place: "United Kingdom",
      publisher: "George Newnes",
      ISBN: "9780140439094",
      language: "English",
      pages: "123",
      synopsis:
        "The Sign of Four follows Sherlock Holmes and Dr. Watson as they investigate a complex case involving stolen treasure, a mysterious death, and a secret pact. Holmes uncovers a trail leading to exotic locations and dangerous criminals while revealing the intricacies of the human psyche.",
      reviews: [
        {
          stars: 5,
          comment:
            "A thrilling adventure with one of Holmes's most complex cases.",
        },
        {
          stars: 4,
          comment:
            "Great mystery and detective work, with classic Holmes flair.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b23,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 24,
      title: "The Boy in the Striped Pyjamas",
      author: "John Boyne",
      genre: "Historical Fiction, Drama",
      publish_date: "2006",
      publish_place: "United Kingdom",
      publisher: "David Fickling Books",
      ISBN: "9780385751537",
      language: "English",
      pages: "216",
      synopsis:
        "The story centers on an 8-year-old boy named Bruno who moves with his family to a house near a concentration camp during World War II. Bruno befriends a Jewish boy named Shmuel, who is imprisoned at the camp, unaware of the horrors around him. The story explores themes of innocence, friendship, and the impact of war.",
      reviews: [
        {
          stars: 5,
          comment:
            "A heartbreaking and powerful story of innocence and tragedy.",
        },
        { stars: 4, comment: "An emotional, thought-provoking book." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b24,
      category: "books we love",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },

    // recently returned

    {
      id: 25,
      title: "Women at War 1914-1918",
      author: "Wendy Simpson",
      genre: "History, War",
      publish_date: "2018",
      publish_place: "United Kingdom",
      publisher: "Pen and Sword Books",
      ISBN: "9781526713383",
      language: "English",
      pages: "288",
      synopsis:
        "This book examines the role of women during the First World War, focusing on how their contributions transformed the nature of the war effort, from working in munitions factories to serving as nurses in active conflict zones. It highlights the changing perceptions of women’s roles in society and how they impacted the war's outcome.",
      reviews: [
        {
          stars: 5,
          comment:
            "A thorough and insightful exploration of women’s roles during WWI.",
        },
        {
          stars: 4,
          comment: "Well-researched, a must-read for history enthusiasts.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b25,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 26,
      title: "The Essential Rilke",
      author: "Galway Kinnell",
      genre: "Poetry",
      publish_date: "2000",
      publish_place: "United States",
      publisher: "W.W. Norton & Company",
      ISBN: "9780393321952",
      language: "English",
      pages: "372",
      synopsis:
        "This collection gathers the best of Rainer Maria Rilke’s work, as translated by Galway Kinnell. The book captures the essence of Rilke’s contemplative, spiritual, and deeply philosophical poetry, addressing themes such as love, death, and the self. It includes selections from Rilke's most famous works, including the *Letters to a Young Poet* and *The Duino Elegies*.",
      reviews: [
        {
          stars: 5,
          comment:
            "A beautiful, comprehensive collection of Rilke's finest work.",
        },
        {
          stars: 4,
          comment: "Kinnell’s translations bring new depth to Rilke’s poetry.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b26,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 27,
      title: "Classical Architecture: The Poetics of Order",
      author: "Alexander Tzonis, Liane Lefaivre",
      genre: "Architecture",
      publish_date: "1986",
      publish_place: "United States",
      publisher: "Rizzoli",
      ISBN: "9780847805999",
      language: "English",
      pages: "400",
      synopsis:
        "This book explores classical architectural principles, focusing on the structure, design, and poetics that have defined Western architectural traditions.",
      reviews: [
        {
          stars: 5,
          comment: "A crucial book for understanding classical architecture.",
        },
        {
          stars: 4,
          comment:
            "Great insights into the philosophy behind classical designs.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b27,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 28,
      title: "Who Killed JonBenet Ramsey?",
      author: "Cyril H. Wecht",
      genre: "True Crime",
      publish_date: "2004",
      publish_place: "United States",
      publisher: "BenBella Books",
      ISBN: "9781933771493",
      language: "English",
      pages: "320",
      synopsis:
        "Forensic pathologist Cyril Wecht investigates the mysterious death of six-year-old JonBenet Ramsey, providing his expert analysis and theories regarding the crime.",
      reviews: [
        {
          stars: 5,
          comment: "A compelling investigation into a heartbreaking mystery.",
        },
        {
          stars: 4,
          comment: "A detailed and professional examination of the case.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b28,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 29,
      title: "The Moon & the Western Imagination",
      author: "Scott L. Montgomery",
      genre: "Science, History",
      publish_date: "1999",
      publish_place: "United States",
      publisher: "University of Chicago Press",
      ISBN: "9780226531311",
      language: "English",
      pages: "232",
      synopsis:
        "This book explores the history of the moon's representation in Western thought, examining scientific, literary, and artistic interpretations across centuries.",
      reviews: [
        {
          stars: 5,
          comment:
            "An insightful and scholarly approach to the moon's cultural significance.",
        },
        {
          stars: 4,
          comment: "Fascinating perspective on science and imagination.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b29,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 30,
      title: "Lonely Planet Turkey",
      author: "Pat Yale, Verity Campbell, Richard Plunkett",
      genre: "Travel",
      publish_date: "2019",
      publish_place: "Australia",
      publisher: "Lonely Planet",
      ISBN: "9781786577896",
      language: "English",
      pages: "760",
      synopsis:
        "Lonely Planet's comprehensive guidebook to Turkey, offering expert advice on the best places to visit, things to do, and practical travel tips.",
      reviews: [
        {
          stars: 5,
          comment:
            "Incredibly detailed and helpful for any traveler to Turkey!",
        },
        { stars: 4, comment: "A must-have guide for exploring Turkey." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b30,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 31,
      title: "Classic Clip Art",
      author: "Various Artists",
      genre: "Art, Design",
      publish_date: "2006",
      publish_place: "United States",
      publisher: "Dover Publications",
      ISBN: "9780486995965",
      language: "English",
      pages: "64",
      synopsis:
        "A collection of classic clip art images from the 19th and early 20th century, featuring illustrations ideal for graphic design, publications, and personal projects.",
      reviews: [
        { stars: 5, comment: "A great resource for designers and artists." },
        {
          stars: 4,
          comment: "Useful and high-quality collection of vintage images.",
        },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b31,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
    {
      id: 32,
      title: "A History of American Music Education",
      author: "William W. Austin",
      genre: "Music, History",
      publish_date: "1961",
      publish_place: "United States",
      publisher: "G. Schirmer",
      ISBN: "9780028730707",
      language: "English",
      pages: "350",
      synopsis:
        "This book provides a comprehensive history of music education in the United States, focusing on its development from colonial times to the 20th century.",
      reviews: [
        {
          stars: 5,
          comment:
            "An invaluable resource for anyone studying music education history.",
        },
        { stars: 4, comment: "A well-researched and informative text." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: b32,
      category: "recently returned",
      document: "",
      to: "borrow",
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    borrowBook: (state, action) => {
      const book = state.books.find((b) => b.id === action.payload);
      if (book) book.isBorrowed = true;
    },
    returnBook: (state, action) => {
      const book = state.books.find((b) => b.id === action.payload);
      if (book) book.isBorrowed = false;
    },

    setBooks: (state, action) => {
      state.books = action.payload;
    },

    addComment: (state, action) => {
      const { bookId, comment, stars } = action.payload; 
      const book = state.books.find((b) => b.id === bookId);
      if (book) {
        book.reviews.push({ stars, comment });
      }
    },
    removeComment: (state, action) => {
      const { bookId, commentIndex } = action.payload;
      const book = state.books.find((b) => b.id === bookId);
      if (book) {
        book.reviews = book.reviews.filter(
          (_, index) => index !== commentIndex
        );
      }
    },
    addBookToList: (state, action) => {
      const { bookId, listName } = action.payload;
      if (!state.lists) state.lists = {}; // initialize lists if undefined

      if (!state.lists[listName]) {
        state.lists[listName] = []; // create list if it doesn't exist
      }

      const book = state.books.find((b) => b.id === bookId);
      if (book && !state.lists[listName].some((b) => b.id === bookId)) {
        state.lists[listName].push(book); // add book if not already in list
      }
    },
  },
});

export const {
  addBook,
  borrowBook,
  returnBook,
  setBooks,
  addComment,
  removeComment,
  addBookToList,
} = booksSlice.actions;
export const selectLists = (state) => state.books.lists || {};
export default booksSlice.reducer;
