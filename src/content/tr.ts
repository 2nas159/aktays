import type { Content } from "./types";

export const tr: Content = {
  meta: {
    title: "Aktays — Web, Ürün ve Yapay Zekâ İçin Tasarım Stüdyosu",
    description:
      "Aktays; iddialı ekipler için web siteleri, mobil ürünler ve yapay zekâ akışları tasarlayan bağımsız bir tasarım stüdyosu.",
  },
  nav: {
    work: "İşler",
    services: "Hizmetler",
    approach: "Yaklaşım",
    studio: "Stüdyo",
    contact: "İletişim",
  },
  hero: {
    eyebrow: "Bağımsız tasarım stüdyosu",
    headline: ["Dikkati", "hak eden", "tasarım."],
    lead:
      "Aktays; herkese benzemeyi reddeden ekipler için web siteleri, mobil ürünler ve yapay zekâ akışları üreten küçük bir stüdyo.",
    scroll: "Kaydır",
    availability: "2. çeyrek için takvim açık",
    location: "İstanbul — Dünya geneli",
  },
  marquee: [
    "Web Tasarımı",
    "Mobil Uygulama",
    "Yapay Zekâ Akışları",
    "Marka Sistemleri",
    "Motion",
    "Tasarım Mühendisliği",
  ],
  services: {
    eyebrow: "Hizmetler",
    title: "Dört iş, hakkıyla.",
    lead:
      "Kapsamı bilerek dar tutuyoruz. Daha az disiplin, daha derin ustalık — ilk eskizden canlıya kadar tek ekip.",
    items: [
      {
        id: "web",
        title: "Web Tasarımı & Geliştirme",
        description:
          "Okunmak, akılda kalmak ve yayına çıkmak için tasarlanmış siteler ve platformlar. Tasarımı tarayıcıda yapıyoruz; onayladığınız şey canlıya çıkan şeydir.",
        deliverables: [
          "Sanat yönetimi",
          "Duyarlı tasarım",
          "Next.js geliştirme",
          "CMS entegrasyonu",
          "Performans & SEO",
        ],
      },
      {
        id: "mobile",
        title: "Mobil Uygulama Tasarımı",
        description:
          "Gerçekten önemli olan iki üç anın etrafında kurgulanan iOS ve Android ürünleri — tek satır kod yazılmadan önce gerçek kullanıcılarla sınanır.",
        deliverables: [
          "Ürün stratejisi",
          "Kullanıcı akışları",
          "Arayüz tasarımı",
          "Prototipleme",
          "Teslim & kalite kontrol",
        ],
      },
      {
        id: "ai",
        title: "Yapay Zekâ Akışları",
        description:
          "Ekibinizin saatleri nerede kaybettiğini çıkarır, o saatleri geri veren otomasyonu kurarız: mevcut çalışma biçiminize oturan asistanlar, hatlar ve iç araçlar.",
        deliverables: [
          "Akış analizi",
          "Asistan & ajan tasarımı",
          "Otomasyon geliştirme",
          "Değerlendirme & güvenlik sınırları",
          "Ekip eğitimi",
        ],
      },
      {
        id: "brand",
        title: "Marka & Tasarım Sistemleri",
        description:
          "Kimlik, tipografi ve teslimden çok sonra bile tutarlı kalan bir bileşen kütüphanesi — ekibinizin tek başına üzerine inşa edebileceği kadar iyi belgelenmiş.",
        deliverables: [
          "Görsel kimlik",
          "Tipografi",
          "Bileşen kütüphanesi",
          "Tasarım token'ları",
          "Kullanım kılavuzu",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Seçili işler",
    title: "Son projeler.",
    lead:
      "Kısa bir liste. Arkasında durmadığımız altmış işi göstermektense arkasında durduğumuz altı işi göstermeyi tercih ederiz.",
    caseLabel: "İncele",
    allLabel: "Tüm projeler",
    projects: [
      {
        slug: "meridian",
        client: "Meridian",
        title: "Nihayet bir ürün gibi okunan işlem platformu",
        year: "2025",
        category: "Platform",
        services: ["Web Tasarımı", "Tasarım Sistemi"],
        summary:
          "Yoğun bir finans panelini tek bir soru etrafında yeniden kurduk: yatırımcının önümüzdeki dört saniyede neye ihtiyacı var? Geri kalan her şey bir kat aşağı indi.",
        metrics: [
          { value: "+%64", label: "Görev tamamlama" },
          { value: "12 hf", label: "Tasarımdan lansmana" },
        ],
        palette: ["#1B2A4A", "#7C9AC4"],
      },
      {
        slug: "nomad-atlas",
        client: "Nomad Atlas",
        title: "Yirmi açık sekme olmadan seyahat planlama",
        year: "2025",
        category: "Mobil",
        services: ["Mobil Uygulama Tasarımı", "Marka"],
        summary:
          "Planlamanın dağınık orta kısmı için kurulmuş bir rota uygulaması: yarım fikirler, arkadaşlarla paylaşılır, gerçekten gerçekleşen bir geziye dönüşür.",
        metrics: [
          { value: "4,8★", label: "App Store puanı" },
          { value: "3,2×", label: "Haftalık geri dönüş" },
        ],
        palette: ["#2F4A34", "#C8D6A8"],
      },
      {
        slug: "verse",
        client: "Verse",
        title: "Dört kat hızlı yayına giren bir editör ekibi",
        year: "2024",
        category: "Yapay Zekâ Akışı",
        services: ["Yapay Zekâ Akışları", "İç Araçlar"],
        summary:
          "On dört adımlık yayın kontrol listesini üç destekli adıma indirdik; tüm editoryal kararlar insan elinde kaldı.",
        metrics: [
          { value: "−%71", label: "Makale başına saat" },
          { value: "0", label: "İşten çıkarılan editör" },
        ],
        palette: ["#3A2A4A", "#C0A8D6"],
      },
      {
        slug: "kavun",
        client: "Kavun",
        title: "Boşluğa iştahı olan bir gıda markası",
        year: "2024",
        category: "Marka & Web",
        services: ["Marka", "Web Tasarımı"],
        summary:
          "Ambalajının odadaki en yüksek ses, web sitesinin ise en sessiz şey olmasını isteyen bir üretici için kimlik ve mağaza.",
        metrics: [
          { value: "+%118", label: "Dönüşüm oranı" },
          { value: "2,1 sn", label: "En büyük boyama" },
        ],
        palette: ["#5A3418", "#E8C48E"],
      },
      {
        slug: "halo-health",
        client: "Halo Health",
        title: "Klinik hissettirmeyen klinik yazılım",
        year: "2024",
        category: "Mobil",
        services: ["Mobil Uygulama Tasarımı", "Tasarım Sistemi"],
        summary:
          "Kronik hastalıkla yaşayanlar için bir bakım arkadaşı; erişilebilirlik kısıtları sonradan eklenen bir madde değil, işin ta kendisi olarak ele alındı.",
        metrics: [
          { value: "AAA", label: "Kontrast uyumu" },
          { value: "+%41", label: "Günlük kullanım" },
        ],
        palette: ["#1F3F42", "#9FCBC7"],
      },
      {
        slug: "foundry",
        client: "Foundry",
        title: "Bir satış ekibinin gelen kutusunu sisteme çevirmek",
        year: "2023",
        category: "Yapay Zekâ Akışı",
        services: ["Yapay Zekâ Akışları", "Web Tasarımı"],
        summary:
          "Araştırma, taslak ve takip tek bir destekli hatta sıkıştırıldı; giden her mesaj yine bir insan imzasıyla çıkıyor.",
        metrics: [
          { value: "9 sa", label: "Kişi başı haftalık tasarruf" },
          { value: "+%27", label: "Yanıt oranı" },
        ],
        palette: ["#4A2A22", "#D6A894"],
      },
    ],
  },
  approach: {
    eyebrow: "Yaklaşım",
    title: "İş nasıl ilerliyor.",
    lead:
      "Keşif tiyatrosu yok, kırk sayfalık sunum yok. Dört aşama, haftalık demolar ve erkenden önünüzde çalışan bir şey.",
    steps: [
      {
        title: "Dinleme",
        description:
          "Bir haftalık soru. Tasarım dosyasını açmadan önce ekibinizle, müşterilerinizle ve verinizle konuşuruz — çünkü gelirken getirdiğiniz brief, nadiren ihtiyacınız olan brief'tir.",
      },
      {
        title: "Çerçeveleme",
        description:
          "Problemi küçük bir ekibin gerçekten çözebileceği bir şeye daraltır ve tek sayfaya yazarız. Tek sayfada anlatamıyorsak henüz anlamamışız demektir.",
      },
      {
        title: "Üretim",
        description:
          "Tasarım ve geliştirme iki haftalık döngülerde birlikte yürür. Her cuma gerçek tarayıcıda gerçek ekranlar görürsünüz; ay sonunda statik maketler değil.",
      },
      {
        title: "Yayın",
        description:
          "Yayına alır, ölçer ve ilk bin kullanıcının bulduğu şeyleri düzeltecek kadar kalırız. Sonra ekibinizin üzerine inşa edebileceği dokümantasyonu teslim ederiz.",
      },
    ],
  },
  studio: {
    eyebrow: "Stüdyo",
    title: "Bilerek küçük.",
    paragraphs: [
      "Aktays; çoğu kişinin atladığı detayları önemseyen kurucular, ürün ekipleri ve pazarlama yöneticileriyle çalışan bağımsız bir tasarım stüdyosu.",
      "Bilinçli olarak küçük kalıyoruz. İlk görüşmede tanıştığınız kişiler işi yapan kişilerdir — araya müşteri temsilcisi katmanı girmez, sözleşme imzalanınca iş junior bir ekibe devredilmez.",
      "Yılda birkaç proje alıyoruz ki her biri satıldığı ilgiyi görsün. Yaptığınız iş için doğru stüdyo değilsek bunu söyler, sizi daha iyi bir adrese yönlendiririz.",
    ],
    stats: [
      { value: "6", label: "Yılda proje" },
      { value: "48 sa", label: "Ortalama yanıt süresi" },
      { value: "9", label: "İş yaptığımız ülke" },
      { value: "%100", label: "Stüdyo içi üretim" },
    ],
  },
  testimonials: {
    eyebrow: "Yorumlar",
    title: "Müşteriler ne diyor.",
    items: [
      {
        quote:
          "İlk hafta brief'imizin yarısına itiraz ettiler. Rahatsız ediciydi ve tamamen haklıydılar.",
        name: "Elif Demir",
        role: "Ürün Direktörü, Meridian",
      },
      {
        quote:
          "İlk çalışan prototip dokuz günde geldi. Dokuz. Biz sadece başlangıç aşamasına bir ay ayırmıştık.",
        name: "Jonas Weber",
        role: "Kurucu, Nomad Atlas",
      },
      {
        quote:
          "Editörlerimiz kendilerini sessizce ikame edecek bir yapay zekâ projesine hazırlanmıştı. Altı ay sonra daha fazlasını isteyen onlar.",
        name: "Priya Raman",
        role: "Yayın Direktörü, Verse",
      },
    ],
  },
  contact: {
    eyebrow: "İletişim",
    title: "Kaydırmaya değer bir şey kuralım.",
    lead:
      "Ne yaptığınızı, kabaca ne zaman gerektiğini ve çalıştığınız bütçe aralığını yazın. Her mesaja iki gün içinde dönüyoruz.",
    email: "merhaba@aktays.com",
    cta: "Projeye başla",
    phoneLabel: "Telefon",
    phone: "+90 000 000 00 00",
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  footer: {
    note: "Bağımsız tasarım stüdyosu. İstanbul ve işin olduğu her yer.",
    rights: "Tüm hakları saklıdır.",
    backToTop: "Başa dön",
    builtBy: "Stüdyo içinde tasarlandı ve geliştirildi",
  },
};
