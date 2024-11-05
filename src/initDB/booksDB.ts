import { Timestamp } from "firebase-admin/firestore";

export interface Book {
  id: string;
  ownerId: string;
  title: string;
  author: string;
  publication_year: number;
  isbn: string;
  publisher: string;
  genre: string;
  language: string;
  number_of_pages: number;
  description: string;
  cover_image: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

const books: Book[] = [
  {
    id: "PGAOH6N63Qexw",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    publication_year: 1997,
    isbn: "978-8419275806",
    publisher: "salamandra",
    genre: "fantasy",
    language: "castellano",
    number_of_pages: 288,
    description:
      "Aventuras de Harry Potter y sus amigos en el mágico mundo de Hogwarts.",
    cover_image: "https://example.com/harry_potter.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "eBHslkH3IDk0M",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El señor de los anillos: La Comunidad del Anillo",
    author: "J.R.R. Tolkien",
    publication_year: 1954,
    isbn: "978-8401333817",
    publisher: "Minotauro",
    genre: "fantasy",
    language: "castellano",
    number_of_pages: 448,
    description:
      "Un hobbit emprende un viaje épico para destruir un anillo maligno.",
    cover_image: "https://example.com/lord_of_the_rings.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },

  {
    id: "eDhhviZ0mAquJ",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    publication_year: 1967,
    isbn: "978-8420632217",
    publisher: "Debolsillo",
    genre: "realismo mágico",
    language: "castellano",
    number_of_pages: 432,
    description:
      "La historia de siete generaciones de la familia Buendía en el pueblo ficticio de Macondo.",
    cover_image: "https://example.com/cien_anos_de_soledad.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "lAAQ4pjlwmGFB",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "1984",
    author: "George Orwell",
    publication_year: 1949,
    isbn: "978-8432218426",
    publisher: "Debolsillo",
    genre: "ciencia ficción distópica",
    language: "castellano",
    number_of_pages: 328,
    description:
      "Un futuro distópico donde un gobierno totalitario controla todos los aspectos de la vida.",
    cover_image: "https://example.com/1984.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "WCCMfFcoLxOy4",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    publication_year: 1943,
    isbn: "978-8420630266",
    publisher: "Debolsillo",
    genre: "cuento filosófico",
    language: "castellano",
    number_of_pages: 96,
    description:
      "Un clásico atemporal sobre la amistad, la pérdida y la importancia de lo esencial.",
    cover_image: "https://example.com/el_principito.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "cHdSHfJZGzja6",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El extranjero",
    author: "Albert Camus",
    publication_year: 1942,
    isbn: "978-8420607454",
    publisher: "Debolsillo",
    genre: "existencialismo",
    language: "castellano",
    number_of_pages: 128,
    description:
      "La historia de un hombre que parece indiferente ante la vida y la muerte.",
    cover_image: "https://example.com/el_extranjero.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "xFBoMcQdHY1pU",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    publication_year: 2007,
    isbn: "978-8498164016",
    publisher: "Nova",
    genre: "fantasy",
    language: "castellano",
    number_of_pages: 718,
    description:
      "Un joven cuenta la historia de su vida, llena de magia y aventuras.",
    cover_image: "https://example.com/el_nombre_del_viento.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "TbrtgLoyQ5NmC",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    publication_year: 1813,
    isbn: "978-8437631264",
    publisher: "Ediciones Cátedra",
    genre: "romance",
    language: "castellano",
    number_of_pages: 384,
    description:
      "Una historia de amor, sociedad y prejuicios en la Inglaterra del siglo XIX.",
    cover_image: "https://example.com/orgullo_y_prejuicio.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "jPZAAKlVYSBP9",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    publication_year: 1943,
    isbn: "978-8420630266",
    publisher: "Debolsillo",
    genre: "cuento filosófico",
    language: "castellano",
    number_of_pages: 96,
    description:
      "Un clásico atemporal sobre la amistad, la pérdida y la importancia de lo esencial.",
    cover_image: "https://example.com/el_principito.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "UxnACh3cZnwRe",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El extranjero",
    author: "Albert Camus",
    publication_year: 1942,
    isbn: "978-8420607454",
    publisher: "Debolsillo",
    genre: "existencialismo",
    language: "castellano",
    number_of_pages: 128,
    description:
      "La historia de un hombre que parece indiferente ante la vida y la muerte.",
    cover_image: "https://example.com/el_extranjero.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "OEoTtZcjVRNWX",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "Crimen y castigo",
    author: "Fyodor Dostoievski",
    publication_year: 1866,
    isbn: "978-8437634319",
    publisher: "Ediciones Cátedra",
    genre: "novela psicológica",
    language: "castellano",
    number_of_pages: 608,
    description:
      "Un joven estudiante comete un asesinato y lucha con su conciencia.",
    cover_image: "https://example.com/crimen_y_castigo.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
  {
    id: "V7tHHptbFaB0i",
    ownerId: "bEXDwTQqXQaELPRILKRvBPh83D03",
    title: "El gran Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: 1925,
    isbn: "978-8420623975",
    publisher: "Debolsillo",
    genre: "novela moderna",
    language: "castellano",
    number_of_pages: 224,
    description:
      "Una historia de amor, lujo y decadencia en la sociedad estadounidense de los años 20.",
    cover_image: "https://example.com/el_gran_gatsby.jpg",
    created_at: Timestamp.fromDate(new Date(2024, 10, 30, 11, 10, 15)),
    updated_at: Timestamp.fromDate(new Date(2024, 10, 30, 15, 20, 45)),
  },
];

export default books;
