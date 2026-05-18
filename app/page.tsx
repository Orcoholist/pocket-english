import Image from "next/image";
import Link from "next/link";
import VkFeedWidget from "./VkFeedWidget";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Татьяна Артеева",
            description:
              "Преподаватель английского языка, Cambridge TKT Band 4",
            url: "https://pocket-english.vercel.app",
            knowsAbout: ["Английский язык", "Преподавание английского"],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "Cambridge TKT Band 4",
              },
            ],
          }),
        }}
      />

      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-brand-100/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-18">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent"
            >
              Pocket English
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                Обо мне
              </Link>
              <Link
                href="#classes"
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                Занятия
              </Link>
              <Link
                href="#groups"
                className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
              >
                Группы
              </Link>
              <Link
                href="#courses"
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                Форматы
              </Link>
              <Link
                href="#contacts"
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                Контакты
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://t.me/mypocketenglish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#0088cc] hover:bg-brand-50 rounded-xl transition-colors"
                title="Telegram канал"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.319.016.104.018.233.016.36z" />
                </svg>
              </a>
              <a
                href="https://vk.com/noteitdown"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#0077FF] hover:bg-brand-50 rounded-xl transition-colors"
                title="Группа ВК"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.34 2 2 3.34 2 8.93v6.14C2 20.66 3.34 22 8.93 22h6.14c5.59 0 6.93-1.34 6.93-6.93V8.93C22 3.34 20.66 2 15.07 2zm3.41 13.68c-.19 2.45-1.95 3.63-4.93 3.63-2.7 0-4.26-.79-5.78-2.45-.68-.74-1.27-1.59-1.79-2.55l-.42-.78c-.21-.39-.03-.88.4-.99l1.48-.37c.26-.07.53.06.67.29.6 1.02 1.77 2.73 3.25 2.73.89 0 1.44-.58 1.44-1.88 0-1.61-.48-2.72-1.5-3.46-.35-.25-.28-.8.11-.95l1.73-.66c.38-.15.8.04.94.42.17.46.41 1.3.46 1.76.04.34.29.6.63.63l1.24.11c.57.05.77.8.29 1.17-.88.68-1.63 1.62-1.63 2.79 0 1.36.78 2.07 1.95 2.07.66 0 1.19-.25 1.63-.61.3-.25.75-.16.91.19l.34.76c.11.24.04.53-.16.7-.88.75-2.08 1.25-3.65 1.25-3.43 0-5.09-2.04-5.09-4.8 0-2.13 1.19-3.6 2.5-4.24.19-.09.21-.36.04-.47-.36-.23-1.18-.67-2.25-.67-1.39 0-2.73.49-3.67 1.15-.22.16-.53.08-.64-.17l-.33-.7c-.12-.27-.03-.59.22-.75 1.27-.81 3.03-1.36 4.81-1.36 1.98 0 3.58.58 4.59 1.34.41.31.48.89.17 1.29-.28.35-.71.49-1.09.34-.45-.18-1.02-.31-1.62-.31-.92 0-1.69.36-2.15.88-.21.24-.16.6.11.73.68.33 1.39.84 1.39 2.17v.31c0 .55.45 1 1 1 .17 0 .33-.04.47-.11.28-.14.62-.08.84.15l.42.44c.18.19.22.47.09.7-.42.79-1.28 1.31-2.27 1.31z" />
                </svg>
              </a>
              <a
                href="#contacts"
                className="hidden sm:inline-flex ml-2 px-5 py-2.5 bg-gradient-to-r from-brand-500 to-rose-500 text-white text-sm font-semibold rounded-full hover:shadow-warm-lg hover:scale-[1.02] transition-all duration-300"
              >
                Записаться
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-rose-50">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-brand-200/40 to-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-accent-100/30 via-brand-100/30 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-rose-100/20 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 pt-8 pb-16 md:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                Преподаватель английского · Cambridge TKT Band 4
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                Английский,
                <br />
                <span className="bg-gradient-to-r from-brand-500 via-rose-400 to-rose-500 bg-clip-text text-transparent">
                  который хочется
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-500 via-rose-400 to-rose-500 bg-clip-text text-transparent">
                  учить
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Онлайн-уроки английского для взрослых и детей. Групповые и
                индивидуальные занятия, разговорный клуб — заговори
                уверенно, без школьной зубрёжки.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contacts"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-warm-lg hover:shadow-warm-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Записаться на урок
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border border-gray-200 hover:border-brand-300 hover:text-brand-600 shadow-sm hover:shadow-warm-md transition-all duration-300"
                >
                  Узнать больше
                </a>
              </div>
            </div>

            {/* Hero photo with decorations */}
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-200/30 via-rose-100/20 to-accent-200/30 rounded-full blur-3xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotated decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-200/60 rotate-12 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-100/40 to-rose-100/40 animate-[spin_60s_linear_infinite_reverse]" />
                {/* Main photo */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-warm-xl">
                  <Image
                    src="/images/teacher-photo1.jpg"
                    alt="Татьяна Артеева"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-2xl shadow-warm-lg p-3 md:p-4 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-400 to-rose-400 rounded-xl flex items-center justify-center text-white text-lg md:text-xl font-bold">
                  6+
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                    лет опыта
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">50+ учеников</p>
                </div>
              </div>
              {/* Small decorative blobs */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-brand-300 rounded-full" />
              <div className="absolute top-1/3 -right-8 w-4 h-4 bg-rose-300 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Photo with decorative frame */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-300 to-rose-300 rounded-[2.5rem] rotate-6" />
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden shadow-warm-lg">
                  <Image
                    src="/images/teacher-photo.jpg"
                    alt="Татьяна Артеева"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorations */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-200 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-rose-200 rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-4">
                👋 Привет!
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Меня зовут{" "}
                <span className="bg-gradient-to-r from-brand-500 to-rose-500 bg-clip-text text-transparent">
                  Татьяна
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Я преподаю английский уже{" "}
                  <strong className="text-brand-600">более 6 лет</strong>.
                  Специализируюсь на работе со взрослыми (от 18 лет) и в
                  мини-группах — каждый запрос уникален, и я подбираю
                  программу под конкретные цели.
                </p>
                <p>
                  Главное для меня —{" "}
                  <strong className="text-brand-600">разрушить языковой барьер</strong>{" "}
                  и показать, что английский может быть естественной и
                  увлекательной частью жизни, а не школьной зубрёжкой.
                </p>
                <p>
                  В свободное время путешествую (уже 15+ стран), танцую и
                  постоянно учусь сама — участвую в международных
                  конференциях и прохожу профессиональные курсы. Верю, что
                  лучший учитель — тот, кто сам продолжает учиться.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Cambridge TKT Band 4", "CELTA (в процессе)", "6+ лет опыта", "15+ стран"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white border border-brand-200 text-brand-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Fun facts row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🌍", label: "Посетила", value: "15+ стран" },
              { icon: "🎯", label: "Преподаю", value: "6+ лет" },
              { icon: "🎓", label: "Категории", value: "Все возрасты" },
              { icon: "📚", label: "Учебники", value: "Зарубежные издания" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 text-center shadow-warm-md hover:shadow-warm-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Education & conferences */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-warm-md border border-brand-100/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                  🎓
                </span>
                Образование
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1 shrink-0">✓</span>
                  <span>СГУ им. Питирима Сорокина, Лингвистика (2020–2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1 shrink-0">✓</span>
                  <span>Cambridge TKT Band 4 (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1 shrink-0">✓</span>
                  <span>Практический курс методики (2022)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1 shrink-0">✓</span>
                  <span>Педагогическое образование проф. переподготовка</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-warm-md border border-rose-100/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-500">
                  🎤
                </span>
                Конференции
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1 shrink-0">✦</span>
                  <span>IV Съезд учителей иностранных языков, 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1 shrink-0">✦</span>
                  <span>Форум ZAZA, Дубай, 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1 shrink-0">✦</span>
                  <span>Конференция TRENDY ENGLISH, 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATES ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Дипломы и сертификаты
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Постоянно повышаю квалификацию, чтобы давать лучший результат
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                src: "/images/cambridge-cert.jpg",
                label: "Cambridge TKT — Band 4 (2025)",
                accent: "brand",
              },
              {
                src: "/images/zaza-cert.jpg",
                label: "Форум ZAZA, Дубай (2025)",
                accent: "rose",
              },
            ].map((cert) => (
              <div
                key={cert.label}
                className={`group bg-white rounded-3xl p-4 shadow-warm-md hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 ${
                  cert.accent === "brand"
                    ? "border border-brand-100/50"
                    : "border border-rose-100/50"
                }`}
              >
                <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-brand-50/50">
                  <Image
                    src={cert.src}
                    alt={cert.label}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p
                  className={`text-center mt-4 font-semibold ${
                    cert.accent === "brand" ? "text-brand-700" : "text-rose-600"
                  }`}
                >
                  {cert.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CHECKLIST CTA ==================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-500 via-brand-600 to-rose-600 rounded-3xl p-8 md:p-12 shadow-warm-xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                <Image
                  src="/images/checklist.png"
                  alt="Чек-лист по чтению"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Check-list
                </h2>
                <p className="text-lg text-white/90 mb-1">
                  Как получить максимум от чтения на английском
                </p>
                <p className="text-white/70 mb-6 max-w-md">
                  Скачай интересный и понятный чек-лист и взгляни по-новому на
                  чтение книг в оригинале
                </p>
                <a
                  href="https://t.me/mypocketenglish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-full font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.319.016.104.018.233.016.36z" />
                  </svg>
                  Получить в Telegram
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW CLASSES WORK ==================== */}
      <section id="classes" className="py-20 md:py-28 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Как проходят занятия
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Всё просто и понятно — никакой лишней теории, только живой язык
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Big card: format */}
            <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-brand-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-rose-400 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  ⏰
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Формат
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Длительность — <strong className="text-brand-600">60 минут</strong>.{" "}
                    Занятия проходят на интерактивной платформе — всё в одном
                    месте: видео, задания, обратная связь. Учебные материалы
                    подбираются под ваш уровень и интересы.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: atmosphere */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-rose-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Атмосфера</h3>
              <p className="text-gray-700 leading-relaxed flex-1">
                Дружелюбная, без страха ошибиться. Ошибка — это шаг вперёд, а не
                повод для оценки. Главное — заговорить и получать удовольствие.
              </p>
            </div>

            {/* Card: materials */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-brand-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl mb-4">
                📖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Материалы</h3>
              <p className="text-gray-700 leading-relaxed flex-1">
                Использую современные зарубежные учебники (Oxford, Cambridge,
                National Geographic) и аутентичные материалы: видео, статьи,
                подкасты.
              </p>
            </div>

            {/* Card: homework */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-rose-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🏠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Домашние задания</h3>
              <p className="text-gray-700 leading-relaxed flex-1">
                Нескучные и по делу. Закрепляем пройденное на практике, без
                тонн однотипных упражнений. Проверка с разбором ошибок.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GROUP CLASSES ==================== */}
      <section id="groups" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-white to-brand-50/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
              👥 Групповые занятия
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Учись в компании
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мини-группы до <strong className="text-rose-600">4 человек</strong>{" "}
              — чтобы каждый успел высказаться.{" "}
              Эффективно, весело и значительно дешевле индивидуальных уроков.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: "💬",
                title: "Больше живой речи",
                desc: "Общаешься не только с преподавателем, но и с другими участниками. Слышишь живую речь разных людей с разным произношением — привыкаешь к реальному языку.",
              },
              {
                icon: "🎯",
                title: "Здоровая конкуренция",
                desc: "Видишь прогресс других — это мотивирует заниматься регулярнее и стараться больше. В группе учиться веселее, а пропускать — стыднее.",
              },
              {
                icon: "💰",
                title: "Цена как кофе",
                desc: "От 800 ₽ за занятие — полноценный урок с преподавателем по цене чашки кофе. Абонемент на 8 занятий с гибким расписанием.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-3xl p-6 shadow-warm-md border border-rose-100/30 hover:shadow-warm-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            <h3 className="text-2xl font-bold mb-6 text-center">
              Выбери подходящую группу
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { time: "🌅 Утренняя", desc: "Для тех, кто учит английский до работы", },
                { time: "🌆 Вечерняя", desc: "После работы переключаемся на английский", },
                { time: "🗣 Разговорный клуб", desc: "Только speaking, без грамматики", },
              ].map((g) => (
                <div
                  key={g.time}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center"
                >
                  <p className="font-semibold text-lg mb-1">{g.time}</p>
                  <p className="text-sm text-white/80">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-rose-700 rounded-full font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Записаться в группу
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Уровни — от Beginner до Intermediate. Первое занятие —{" "}
            <strong className="text-rose-600">пробное бесплатно</strong> 🎁
          </p>
        </div>
      </section>

      {/* ==================== VK FEED ==================== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-brand-50/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Полезное из группы
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Ещё больше материалов и советов — подписывайся на{" "}
              <a
                href="https://vk.com/second.language"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-semibold hover:text-brand-700 underline underline-offset-2"
              >
                Second Language
              </a>{" "}
              во ВКонтакте
            </p>
          </div>
          <VkFeedWidget />
          <div className="text-center mt-8">
            <a
              href="https://vk.com/second.language"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077FF] text-white rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.34 2 2 3.34 2 8.93v6.14C2 20.66 3.34 22 8.93 22h6.14c5.59 0 6.93-1.34 6.93-6.93V8.93C22 3.34 20.66 2 15.07 2zm3.41 13.68c-.19 2.45-1.95 3.63-4.93 3.63-2.7 0-4.26-.79-5.78-2.45-.68-.74-1.27-1.59-1.79-2.55l-.42-.78c-.21-.39-.03-.88.4-.99l1.48-.37c.26-.07.53.06.67.29.6 1.02 1.77 2.73 3.25 2.73.89 0 1.44-.58 1.44-1.88 0-1.61-.48-2.72-1.5-3.46-.35-.25-.28-.8.11-.95l1.73-.66c.38-.15.8.04.94.42.17.46.41 1.3.46 1.76.04.34.29.6.63.63l1.24.11c.57.05.77.8.29 1.17-.88.68-1.63 1.62-1.63 2.79 0 1.36.78 2.07 1.95 2.07.66 0 1.19-.25 1.63-.61.3-.25.75-.16.91.19l.34.76c.11.24.04.53-.16.7-.88.75-2.08 1.25-3.65 1.25-3.43 0-5.09-2.04-5.09-4.8 0-2.13 1.19-3.6 2.5-4.24.19-.09.21-.36.04-.47-.36-.23-1.18-.67-2.25-.67-1.39 0-2.73.49-3.67 1.15-.22.16-.53.08-.64-.17l-.33-.7c-.12-.27-.03-.59.22-.75 1.27-.81 3.03-1.36 4.81-1.36 1.98 0 3.58.58 4.59 1.34.41.31.48.89.17 1.29-.28.35-.71.49-1.09.34-.45-.18-1.02-.31-1.62-.31-.92 0-1.69.36-2.15.88-.21.24-.16.6.11.73.68.33 1.39.84 1.39 2.17v.31c0 .55.45 1 1 1 .17 0 .33-.04.47-.11.28-.14.62-.08.84.15l.42.44c.18.19.22.47.09.7-.42.79-1.28 1.31-2.27 1.31z" />
              </svg>
              Подписаться
            </a>
          </div>
        </div>
      </section>

      {/* ==================== COURSE FORMATS ==================== */}
      <section id="courses" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Форматы занятий
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Выбирай формат, который подходит именно тебе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Individual */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-warm-md border border-brand-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-brand-500 rounded-t-3xl" />
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
                👤
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Индивидуальные
              </h3>
              <p className="text-brand-600 text-sm font-medium mb-4">от 1 500 ₽ / занятие</p>
              <ul className="space-y-2.5 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 shrink-0">✓</span>
                  <span>Программа под твой запрос</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 shrink-0">✓</span>
                  <span>Гибкое расписание</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 shrink-0">✓</span>
                  <span>100% внимания преподавателя</span>
                </li>
              </ul>
            </div>

            {/* Group */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-warm-md border border-rose-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 ring-2 ring-rose-200/50">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-t-3xl" />
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                🔥 популярное
              </span>
              <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Групповые
              </h3>
              <p className="text-rose-600 text-sm font-semibold mb-1">от 800 ₽ / занятие</p>
              <p className="text-gray-500 text-xs mb-4">Мини-группы до 4 человек</p>
              <ul className="space-y-2.5 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                  <span>Живое общение с другими учениками</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                  <span>Разные акценты и стили речи</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                  <span>Командные игры и дискуссии</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5 shrink-0">✓</span>
                  <span>Доступная цена — от 800 ₽</span>
                </li>
              </ul>
            </div>

            {/* Speaking club */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-warm-md border border-accent-100/30 hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-400 to-accent-500 rounded-t-3xl" />
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
                🗣
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Разговорный клуб
              </h3>
              <p className="text-accent-600 text-sm font-medium mb-4">от 500 ₽ / встреча</p>
              <ul className="space-y-2.5 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-0.5 shrink-0">✓</span>
                  <span>Только speaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-0.5 shrink-0">✓</span>
                  <span>Интересные темы и дискуссии</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-0.5 shrink-0">✓</span>
                  <span>Новые знакомства</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Абонемент на 8 занятий. Первое занятие —{" "}
            <strong className="text-brand-600">пробное</strong> 🎁
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Результаты учеников
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Истории тех, кто уже занимается — от первого робкого Hello до
              уверенных диалогов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-brand-100/30 relative">
              {/* Quote mark */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-brand-400 to-rose-400 rounded-xl flex items-center justify-center text-white text-xl font-serif">
                &ldquo;
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Анастасия
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-brand-500 text-sm font-medium">Intermediate</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 text-sm">6 месяцев</span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong className="text-brand-600">С чего начинали:</strong>{" "}
                    Beginner, занималась в группе — боялась говорить при других.
                  </p>
                  <p>
                    <strong className="text-green-600">К чему пришли:</strong>{" "}
                    Уверенно общается в путешествиях, смотрит сериалы в
                    оригинале, переписывается с коллегами. Продолжает уже
                    индивидуально.
                  </p>
                  <p className="text-sm text-gray-500 italic mt-2">
                    💡 Группа помогла перешагнуть языковой барьер — в компании
                    страха меньше.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-rose-100/30 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-serif">
                &ldquo;
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Сергей, 31 год
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-rose-500 text-sm font-medium">
                    Pre-Intermediate → Intermediate
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 text-sm">5 месяцев</span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong className="text-rose-600">С чего начинали:</strong>{" "}
                    Elementary, учил в школе и забыл. Нужен был язык для
                    работы и командировок.
                  </p>
                  <p>
                    <strong className="text-green-600">К чему пришли:</strong>{" "}
                    Ведёт переписку с зарубежными партнёрами, уверенно
                    говорит по видео-звонкам, понимает профессиональные
                    подкасты.
                  </p>
                  <p className="text-sm text-gray-500 italic mt-2">
                    💡 Занимается в мини-группе — сказал, что один бы бросил,
                    а в компании держит ритм.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-warm-md border border-accent-100/30 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center text-white text-xl font-serif">
                &ldquo;
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Женя, 18 лет
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-accent-500 text-sm font-medium">
                    Elementary → Intermediate+
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-400 text-sm">8 месяцев</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <p>
                    <strong className="text-accent-600">С чего начинали:</strong>{" "}
                    Elementary, школьная база с пробелами, учит для себя.
                  </p>
                  <p>
                    <strong className="text-green-600">К чему пришли:</strong>{" "}
                    Перешла порог Intermediate+, смотрит TED Talks в
                    оригинале.
                  </p>
                  <p className="text-sm text-gray-500 italic md:col-span-2">
                    💡 Применяет критическое мышление в рассуждениях на
                    английском.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RULES ==================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-warm-lg border border-brand-100/30">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              Правила и отмены
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
              Несколько простых договорённостей, чтобы занятия приносили
              радость
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "📋",
                  title: "Оплата",
                  desc: "По предоплате — покупка абонемента из 8 занятий",
                },
                {
                  icon: "⏰",
                  title: "Отмена",
                  desc: "Менее чем за 4 часа до начала — занятие считается проведённым",
                },
                {
                  icon: "🤝",
                  title: "Уважение",
                  desc: "Мы уважаем время друг друга",
                },
                {
                  icon: "📄",
                  title: "Договор",
                  desc: "Заключаем официальный договор",
                },
              ].map((rule) => (
                <div
                  key={rule.title}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-warm-md"
                >
                  <span className="text-2xl shrink-0">{rule.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{rule.title}</p>
                    <p className="text-sm text-gray-600">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACTS ==================== */}
      <section
        id="contacts"
        className="py-20 md:py-28 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100/20 via-transparent to-rose-100/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Остались вопросы?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Открой новые возможности — начни изучать английский прямо сейчас
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://t.me/tanya_rt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0088cc] text-white rounded-full font-semibold text-lg shadow-warm-lg hover:shadow-warm-xl hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.319.016.104.018.233.016.36z" />
                </svg>
                Написать в Telegram
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://vk.com/noteitdown"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0077FF] text-white rounded-full font-semibold text-lg shadow-warm-lg hover:shadow-warm-xl hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.34 2 2 3.34 2 8.93v6.14C2 20.66 3.34 22 8.93 22h6.14c5.59 0 6.93-1.34 6.93-6.93V8.93C22 3.34 20.66 2 15.07 2zm3.41 13.68c-.19 2.45-1.95 3.63-4.93 3.63-2.7 0-4.26-.79-5.78-2.45-.68-.74-1.27-1.59-1.79-2.55l-.42-.78c-.21-.39-.03-.88.4-.99l1.48-.37c.26-.07.53.06.67.29.6 1.02 1.77 2.73 3.25 2.73.89 0 1.44-.58 1.44-1.88 0-1.61-.48-2.72-1.5-3.46-.35-.25-.28-.8.11-.95l1.73-.66c.38-.15.8.04.94.42.17.46.41 1.3.46 1.76.04.34.29.6.63.63l1.24.11c.57.05.77.8.29 1.17-.88.68-1.63 1.62-1.63 2.79 0 1.36.78 2.07 1.95 2.07.66 0 1.19-.25 1.63-.61.3-.25.75-.16.91.19l.34.76c.11.24.04.53-.16.7-.88.75-2.08 1.25-3.65 1.25-3.43 0-5.09-2.04-5.09-4.8 0-2.13 1.19-3.6 2.5-4.24.19-.09.21-.36.04-.47-.36-.23-1.18-.67-2.25-.67-1.39 0-2.73.49-3.67 1.15-.22.16-.53.08-.64-.17l-.33-.7c-.12-.27-.03-.59.22-.75 1.27-.81 3.03-1.36 4.81-1.36 1.98 0 3.58.58 4.59 1.34.41.31.48.89.17 1.29-.28.35-.71.49-1.09.34-.45-.18-1.02-.31-1.62-.31-.92 0-1.69.36-2.15.88-.21.24-.16.6.11.73.68.33 1.39.84 1.39 2.17v.31c0 .55.45 1 1 1 .17 0 .33-.04.47-.11.28-.14.62-.08.84.15l.42.44c.18.19.22.47.09.7-.42.79-1.28 1.31-2.27 1.31z" />
                </svg>
                Группа ВКонтакте
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-warm-md inline-flex items-center gap-3 mx-auto">
              <span className="text-brand-500">✉️</span>
              <span className="text-gray-700">
                Для записи — пиши в Telegram:{" "}
                <strong className="text-brand-600">@tanya_rt</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-brand-400 to-rose-400 bg-clip-text text-transparent"
          >
            Pocket English
          </Link>
          <p className="text-sm mt-3 max-w-md mx-auto">
            Артеева Т.С. самозанятый ИНН 110215192750
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Личный блог о разговорном английском
          </p>
        </div>
      </footer>
    </div>
  );
}
