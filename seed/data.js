import db from '../db/connection.js'
import Book from '../models/book.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const books =
    [
      {
        "title": "Sekhem Apep",
        "author": "Michael W Ford",
        "path": "Left-Hand-Path",
        "imgURL": "https://i.imgur.com/DybO6M1.jpg",
        "description": "Sekhem Apep is both a recent modern study and magical grimoire exploring 20 years of the darker traditions of Typhonian and Vampyric Magick of the Black Order of the Dragon. Destined to be one of the most controversial magickal books of recent years, Sekhem Apep unveils the theory and practice of vampyrism and the dark current of Typhonian Thelema from a Luciferian perspective. Presenting the foundation and beginning structure of the Botd in the early 1990's, including the original manifesto, published for the first time since 1994, techniques and the mental technology of astral vampyrism is clearly presented including the Sigils of the Vampyre Cultus and their meaning. Techniques of feeding and accumulating Astral Energy from the physical body, astral projection and transforming life force according to the goal and desire of the Vampyre Adept, Sekhem Apep is a gateway to those interested in the darker path of predatory spirituality.",
      },
      {
        "title": "The Book Of The Law",
        "author": "Aleister Crowley",
        "path": "Left-Hand-Path",
        "imgURL": "https://i.imgur.com/u9Ol1lH.jpg",
        "description": "'Do what thou wilt shall be the whole of the Law.' This often misunderstood phrase, which forms the basis for Crowley's practice of Magick, is found in The Book of the Law. Dictated to Crowley in Cairo between noon and 1:00p.m. on three successive days in April 1904, The Book of the Law is the source book and key for Crowley students and for the occult in general. The holy text that forms the basis of Crowley's belief system, Thelema, was transmitted to him by the entity known as Aiwass over the course of three fateful April days in 1904. With his wife Rose as the medium for what would become known as the Cairo Working, Crowley dutifully transcribed the communications on hotel stationery. This work contains the corrected text of the 1938 edition with a facsimile of the handwritten manuscript.",
      },
      {
        "title": "Tree of Qliphoth",
        "author": "Asenath Mason",
        "path": "Left-Hand-Path",
        "imgURL": "",
        "description": "'Tree of Qliphoth' is the third anthology by the Temple of Ascending Flame, exploring the dark side of the Qabalistic Tree as a map of Draconian Initiation. In essays, rituals and other expressions of personal research and experience, magicians and initiates of the Draconian Tradition discuss the realms of the Nightside, teachings and gnosis of its dark denizens, as well as practical methods developed both within the Temple and through their individual work. Material included in this book will give the reader a foretaste of these forces and a glimpse of what you can expect while embarking on the self-initiatory journey through the labyrinths of the Dark Tree. Compiled and edited by Asenath Mason, the book contains contributions from active magicians, students, and practitioners of the Left Hand Path: Rev Bill Duvendack, Edgar Kerval, Christiane Kliemannel, Pairika-Eva Borowska, M. King, Calia van de Reyn, Leonard Dewar, Mafra Lunanigra, N.A:O, S.TZE. Swan, and Zeis Araujo.", 
      },
      {
        "title": "The Secret Teachings of all Ages",
        "author": "Manly P Hill",
        "path": "Traditional Path",
        "imgURL": "https://i.imgur.com/SrxMQfL.jpg",
        "description": "The Secret Teachings of All Ages is perhaps the most comprehensive and complete esoteric encyclopedia ever written. The sheer scope and ambition of this book are stunning. In this book Manly P. Hall has successfully distilled the essence of more arcane subjects than one would think possible. He covers Rosicrucianism and other secret societies, alchemy, cryptology, Kabbalah, Tarot, pyramids, the Zodiac, Pythagorean philosophy, Masonry, gemology, Nicholas Flammel, the identity of William Shakespeare, The Life and Teachings of Thoth Hermes Trismegistus, The Qabbalah, The Hiramic Legend, The Tree of the Sephiroth, Mystic Christianity, and there are more than 200 illustrations included here. This is essential reading for anyone wishing to explore esoteric knowledge.", 
      },
      {
        "title": "Transcendental Magic: Its Doctrine and Ritual",
        "author": "Eliphas Levi",
        "path": "Traditional Path",
        "imgURL": "https://i.imgur.com/TjHhXpC.jpg",
        "description": "Behind the veil of all the hieratic and mystical allegories of ancient doctrines, behind the darkness and strange ordeals of all initiations, under the seal of all sacred writings, in the ruins of Nineveh or Thebes, on the crumbling stones of old temples and on the blackened visage of the Assyrian or Egyptian sphinx, in the monstrous or marvelous paintings which interpret to the faithful of India the inspired pages of the Vedas, in the cryptic emblems of our old books on alchemy, in the ceremonies practised at reception by all secret societies, there are found indications of a doctrine which is everywhere the same and everywhere carefully concealed. ", 
      },
      {
        "title": "The Sworn Book of Honorius",
        "author": "Honorius of Thebes & Joseph H Peterson",
        "path": "Traditional Path",
        "imgURL": "https://i.imgur.com/tynf10r.jpg",
        "description": "As the title testifies, students were sworn to secrecy before being given access to this magic text, and only a few manuscripts have survived. Bits of its teachings, such as the use of the magic whistle for summoning spirits, are alluded to in other texts. Another key element of its ritual, the elaborate 'Seal of God,' has been found in texts and amulets throughout Europe. Interest in The Sworn Book of Honorius has grown in recent years, yet no modern translations have been attempted―until now. Purporting to preserve the magic of Solomon in the face of intense persecution by religious authorities, this text includes one of the oldest and most detailed magic rituals. It contains a complete system of magic including how to attain the divine vision, communicate with holy angels, and control aerial, earthly, and infernal spirits for practical gain. Largely ignored by historians until recently, this text is an important witness to the transmission of Kabbalah and Jewish mysticism to European Hermeticists.", 
      },
      {
        "title": "Chinese Medical QiGong Therapy",
        "author": "Jerry Alan Johnson",
        "path": "Right-Hand-Path",
        "imgURL": "https://i.imgur.com/2b8I9hq.jpg",
        "description": "The information contained within the Chinese Medical Qigong Therapy: A Comprehensive Clinical Text has currently been tripled and reformatted into five exciting new textbooks. Written by Grand Master of Martial, Medical, and Spiritual Qigong training, this series provides the first complete explanation of ancient Chinese esoteric theory that has for centuries eluded and confounded the West. This first textbook includes a thorough understanding of the creation and development of the body's energetic fields, ancient metaphysical theories of tissue formation, and the evolution of ancient Chinese energetic medicine. The featured highlights of this clinical textbook include: - Foundations of Chinese Energetic Medicine - The History of Qigong and Chinese Medicine - Understanding Ancient Chinese Metaphysics - The Energetic Formation of the Universe - Energetic Formation of the Human Body - Energetic Embryological Development - Prenatal and Postnatal Energetic Patterns - Ancient Daoist Archetypes of the Human Soul - The Hun (Ethereal Soul) and Po (Corporeal Soul) - Tissue Formation and Development - The Five Energies of the Human Body - The 12 Chakra Gates and The Three Dantians - The Taiji Pole and Three Dantians - The Eight Extraordinary Vessels - The Six Extraordinary Organs - The 12 Primary Organs, Channels and Collaterals - The Connecting Vessels, Divergent Channels, Muscle and Tendon Channels and Skin Zones - The Body's Energetic Points", 
      },
      {
        "title": "Pistis Sophia",
        "author": "Gospels translated by G R S Mead",
        "path": "Right-Hand-Path",
        "imgURL": "https://i.imgur.com/qqZS0OC.jpg",
        "description": "Was there a secret marriage between Jesus and Mary Magdalene, or was Mary Magdalene one of the first feminist theologians of the New Testament period?  Did Jesus have female disciples? The book of Pistis Sophia reveals in its dialogue the true relationship between Jesus and Mary Magdalene. It portrays a deep spiritual relationship between the two, which is different from that suggested in Dan Brown’s best-selling novel The Da Vinci Code, but is revealed in the Pistis Sophia. This book, whose title unites the Greek words for “Faith” and “Wisdom”, was used as a sacred text by the early Coptic Church community of Egypt in the 2nd century AD.  Sophia (Wisdom) itself was regarded by the early Coptics as a female presence who undergoes the experience of transgression and redemption in her path to full participation in the many universes, in conjunction with the Christ.", 
      },
      {
        "title": "Kabbalistic Tarot: Hebraic Wisdom in the Major and Minor Arcana",
        "author": "Dovid Krafchow",
        "path": "Right-Hand-Path",
        "imgURL": "https://i.imgur.com/YBkzjoj.jpg",
        "description": "In Kabbalistic Tarot, Dovid Krafchow details how the true meaning of the tarot is locked within the Kabbalah. He shows the correspondence between the 22 Major Arcana cards and the 22 letters of the Hebrew alphabet and how the four suits correspond to the four kabbalistic worlds of Briah, Yitzerah, Asiyah, and Atzilut. He describes the kabbalistic meanings of each of the 78 cards and their relations to the Torah and provides insight into the Tree of Life spread through several kabbalistic readings.", 
      }
  
    ]

  await Book.insertMany(books)
  console.log("Created books!")

  // close database connection. done.
  db.close()
}

insertData()