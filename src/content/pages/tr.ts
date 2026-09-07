import type { PagesContent } from "./types";

export const tr: PagesContent = {
  common: {
    backToWork: "Tüm işler",
    nextProject: "Sonraki proje",
    viewAll: "Tümünü gör",
    getInTouch: "İletişime geç",
    startProject: "Projeye başla",
  },

  work: {
    meta: {
      title: "İşler — Aktays",
      description:
        "Web tasarımı, mobil ürün tasarımı ve yapay zekâ akışlarında seçili projeler ve arkalarındaki düşünce.",
    },
    eyebrow: "Seçili işler",
    title: "Arkasında durduğumuz altı proje.",
    lead:
      "Yılda birkaç proje alıyoruz. Aşağıdakilerin hepsi yayına çıktı ve hepsinin bir sayısı var — kımıldayanlar da, kımıldamayanlar da.",
    countLabel: "proje",
    labels: {
      client: "Müşteri",
      year: "Yıl",
      category: "Disiplin",
      services: "Hizmetler",
      role: "Rolümüz",
      duration: "Süre",
      overview: "Genel bakış",
      challenge: "Problem",
      approach: "Ne yaptık",
      outcome: "Nereye vardı",
      credits: "Ekip",
      results: "Sonuçlar",
    },
    studies: {
      meridian: {
        intro:
          "Meridian'ın platformu yığılarak büyümüştü. Her yeni enstrüman bir panel, her panel bir sekme ekledi; bir zamanlar ekrana sığan arayüz, yatırımcıların görerek değil ezberleyerek gezindiği bir şeye dönüştü.",
        challenge: [
          "Elimize gelen brief görsel bir yenileme istiyordu. İnsanların gerçekte nasıl işlem yaptığını üç gün izlemek, sorunun görsel katman değil bilgi hiyerarşisi olduğunu gösterdi. Yatırımcılar durumu kafalarında tutuyordu, çünkü ekran onlar için tutmuyordu.",
          "En yoğun kullanıcıların sessizce kendi çözümlerini kurduğunu da fark ettik: ikinci ekranda açık tablolar, monitör çerçevesine yapıştırılmış notlar, kimsenin resmen belgelemediği bir kısayol dokümanı.",
        ],
        approach: [
          {
            title: "Brief'i yeniden çerçeveledik",
            body:
              "Problemi tek bir soruya çevirdik — bu yatırımcının önümüzdeki dört saniyede neye ihtiyacı var? — ve bu testi geçemeyen her şeyi bir kat aşağı indirdik. Böylece yeniden tasarım, ekleme değil çıkarma işine dönüştü.",
          },
          {
            title: "Önce en yoğun senaryoyu tasarladık",
            body:
              "Zarif bir boş ekran tasarlayıp gerçeğe dayanmasını ummak yerine sistemdeki en kalabalık hesapla başlayıp geriye doğru çalıştık. Maksimum yoğunlukta ayakta kalıyorsa, daha hafifi kendiliğinden geliyordu.",
          },
          {
            title: "Ekranları değil sistemi kurduk",
            body:
              "Token'lanmış ve belgelenmiş kırk bir bileşen; böylece iç ekip sonraki yirmi ekranı bizsiz yapabildi. Bu devir teslim daha ilk haftada sözleşmeye yazılmıştı.",
          },
        ],
        outcome: [
          "Lansmanı izleyen ilk çeyrekte görev tamamlama, eski arayüzdeki aynı kohorta göre %64 arttı. İlk aksiyona kadar geçen süre neredeyse yarıya indi.",
          "Daha yakından izlediğimiz sayı: \"bulamıyorum\" etiketli destek talepleri %81 düştü. Geçici çözümler ortadan kalktı, çünkü gerekli olmaktan çıktılar.",
        ],
        credits: [
          { role: "Tasarım yönetimi", value: "Aktays" },
          { role: "Tasarım sistemi", value: "Aktays" },
          { role: "Ön yüz geliştirme", value: "Aktays + Meridian platform ekibi" },
          { role: "Araştırma", value: "Aktays" },
        ],
      },

      "nomad-atlas": {
        intro:
          "Seyahat planlama uygulamaları genelde sürecin sonu için kurulur: onaylanmış rota, düzenli zaman çizelgesi. Nomad Atlas bunun tersini istedi — bir gezi hâlâ grup sohbetinde yarım kalmış altı fikirken ortadaki dağınıklığı taşıyan bir şey.",
        challenge: [
          "İncelediğimiz her rakip baştan kesinlik istiyordu. Tarihini seç. Şehrini seç. İlk rezervasyonunu ekle. Çoğu gezi böyle başlamaz; bir söylenti olarak başlar ve genelde birbiriyle anlaşamayan birkaç kişi arasında yavaşça netleşir.",
          "Zor kısım arayüz değildi. Tek bir yazarı olmayan, iki kişinin aynı öğleden sonranın çelişen sürümlerini düzenleyebildiği ve henüz ikisinin de haksız olmadığı bir doküman için tasarlamaktı.",
        ],
        approach: [
          {
            title: "Belirsizliği birinci sınıf bir durum yaptık",
            body:
              "Fikirler rotada tarihsiz, rezervasyonsuz ve uzlaşısız yaşayabiliyor. Biri onları yükseltene kadar bir bekleme şeridinde duruyorlar. Hiçbir şey grubu hazır olmadan karar vermeye zorlamıyor.",
          },
          {
            title: "Bireylerle değil gerçek gruplarla test ettik",
            body:
              "Gerçek geziler planlayan on bir arkadaş grubu, üç hafta boyunca gözlemlendi. Tek kişilik kullanılabilirlik testi tüm sosyal dinamiği kaçırırdı: erteleme, veto, bütün işi yapan o tek kişi.",
          },
          {
            title: "Bildirim kısıtlılığını tasarladık",
            body:
              "Ortak bir planlama aracı, hiç susmayan bir grup sohbetine dönüşebilir. Birini bölmeye değecek şeyler için açık kurallar yazdık. Değişikliklerin çoğu değmiyor.",
          },
        ],
        outcome: [
          "İlk on sekiz ayda App Store'da 4,8 puan ve seyahat planlama kategorisi ortalamasının 3,2 katı geri dönüş oranı.",
          "Tasarladığımız davranış veride göründü: rotalar medyan olarak kalkıştan 71 gün önce oluşturuluyor ve 19 ayrı günde düzenleniyor. İnsanlar burayı özet olarak değil, dağınıklığın kendisi olarak kullanıyor.",
        ],
        credits: [
          { role: "Ürün stratejisi", value: "Aktays" },
          { role: "UX & UI tasarımı", value: "Aktays" },
          { role: "Marka kimliği", value: "Aktays" },
          { role: "iOS & Android geliştirme", value: "Nomad Atlas" },
        ],
      },

      verse: {
        intro:
          "Verse bize artık sık duyduğumuz bir istekle geldi: editör ekibini yapay zekâ ile hızlandırın. Aynı sıklıkta duyduğumuz, çoğunlukla dile getirilmeyen bir korkuyla da geldiler — projenin asıl amacının ekibi küçültmek olduğu.",
        challenge: [
          "Bir makaleyi yayımlamak beş araçta on dört adım sürüyordu. Bu adımların yaklaşık dokuzu mekanikti: yeniden biçimlendirme, boyutlandırma, etiketleme, çapraz paylaşım, bağlantı kontrolü. Kalan beşi muhakemeydi ve editörler zaten muhakeme için işe alınmıştı.",
          "Başlangıç toplantısında o beşini otomatikleştirmeyeceğimizi söyledik. Bu kısıt her şeyi biçimlendirdi ve ekibin projeye savunmacı değil dürüst yaklaşmasının sebebi oldu.",
        ],
        approach: [
          {
            title: "Saatlerin nereye gittiğini haritaladık",
            body:
              "Yöneticileriyle bir atölye değil, editörlerle iki haftalık zaman takibi. Darboğaz yazmak ya da düzeltmek değildi — her yazıdan sonraki yirmi dakikalık yeniden biçimlendirmeydi.",
          },
          {
            title: "Mekanik dokuzu otomatikleştirdik",
            body:
              "On dört manuel adımın yerini üç destekli adım aldı. Otomatik üretilen her çıktı, bir editörün onayladığı taslak olarak geliyor; asla yayımlanmış bir içerik olarak değil. İnsan döngüde politika gereği değil tasarım gereği kalıyor.",
          },
          {
            title: "Özellikten önce güvenlik sınırlarını kurduk",
            body:
              "Değerlendirme setleri, üslup için gerileme kontrolleri ve bir geri alma yolu. %4 hata yapan bir asistan, o %4'ü okurlarınızdan önce bulamıyorsanız yayıncılıkta kullanılamaz.",
          },
        ],
        outcome: [
          "Yayımlanan makale başına saat %71 düştü. Kadro değişmeden üretim yaklaşık dört katına çıktı.",
          "Hiçbir editör işten çıkarılmadı — ekibin en çok önemsediği sayı ve şimdi bundan azını değil fazlasını istemelerinin sebebi.",
        ],
        credits: [
          { role: "Akış araştırması", value: "Aktays" },
          { role: "Asistan tasarımı", value: "Aktays" },
          { role: "Otomasyon geliştirme", value: "Aktays" },
          { role: "Değerlendirme çerçevesi", value: "Aktays + Verse yayın ekibi" },
        ],
      },

      kavun: {
        intro:
          "Kavun küçük partiler hâlinde reçel üretiyor ve bunları bir pazar salonunun öbür ucundan görülecek kadar yüksek sesli ambalajlarla satıyor. İlk web siteleri bu enerjiye eşlik etmeye çalıştı ve satması gereken ürünle yarışır hâle geldi.",
        challenge: [
          "Ambalaj işi zaten yapıyordu. Cesur, doygun ve tanınırdı. Site bunun hepsini tekrarlıyordu — aynı renkler, aynı ölçek, aynı ses seviyesi — ve ortaya her şeyin bağırdığı için hiçbir şeye bakılamayan bir sayfa çıkmıştı.",
          "İkinci ve daha sıkıcı bir sorun daha vardı: site orta seviye bir telefonda ilk görüntüyü 6,4 saniyede veriyordu; müşterilerinin çoğunun kullandığı cihaz da tam olarak buydu.",
        ],
        approach: [
          {
            title: "Siteyi sessiz oda yaptık",
            body:
              "Beyaza yakın zemin, cömert boşluklar, tek bir yazı karakteri, sıfır süsleme. Sayfadaki tüm rengi ambalaj veriyor, çünkü sayfada renge ihtiyacı olan tek şey o.",
          },
          {
            title: "Negatif alan için fotoğrafladık",
            body:
              "Kavanozun kadrajı doldurduğu değil, içinde küçük durduğu bir sanat yönetimi. Gıda için sezgiye aykırı ama etiketin doku değil nesne gibi okunmasını sağlıyor.",
          },
          {
            title: "Mağazayı düzgünce yeniden kurduk",
            body:
              "Statik render, duyarlı görseller, ilk ekranda üçüncü parti script yok. En büyük içerik boyaması aynı test cihazında 6,4 saniyeden 2,1'e indi.",
          },
        ],
        outcome: [
          "Dönüşüm oranı, eşleştirilmiş sekiz haftalık bir pencerede önceki mağazaya göre %118 arttı.",
          "Ortalama sepet tutarı da yükseldi — bunu öngörmemiştik. Sakinleşen sunum, büyük hediye setlerini değerlendirmeyi kolaylaştırmış görünüyor.",
        ],
        credits: [
          { role: "Marka kimliği", value: "Aktays" },
          { role: "Sanat yönetimi", value: "Aktays" },
          { role: "Web tasarımı & geliştirme", value: "Aktays" },
          { role: "Fotoğraf", value: "Aktays tarafından yaptırıldı" },
        ],
      },

      "halo-health": {
        intro:
          "Halo Health kronik hastalıkla yaşayan insanlara destek oluyor — kötü bir günde, tek elle, loş ışıkta ve yorgunken açılan türden bir yazılım. Bu koşulları uç senaryo değil, işin brief'i olarak ele aldık.",
        challenge: [
          "Klinik yazılımların çoğu hekim için tasarlanıp sonra hastaya verilir. Sözcük dağarcığı, yoğunluğu ve varsaydığı dikkat süresi; hasta olan birine değil, işinin başındaki birine aittir.",
          "Buradaki erişilebilirlik bir uyum egzersizi değildi. Titreme, yorgunluk, bulanık görme ve zihinsel yük; sonradan karşılanacak varsayımsal kısıtlar değil, gerçek kullanıcıların gündelik çalışma koşullarıydı.",
        ],
        approach: [
          {
            title: "Önce kısıtları belirledik",
            body:
              "AAA kontrast, en az 48 piksel dokunma alanı, iki el gerektiren hiçbir etkileşim yok ve kritik bilginin yalnızca renkle aktarılmaması. İlk ekran çizilmeden önce sabitlendi; böylece hiçbir şey sonradan eklenmek zorunda kalmadı.",
          },
          {
            title: "Günlük etkileşimi tek dokunuşa indirdik",
            body:
              "En sık yapılan işlem — nasıl hissettiğini kaydetmek — kilit ekranından tek dokunuş oldu. Üründeki diğer her şey bundan belli bir mesafede duruyor.",
          },
          {
            title: "Kötü günlerde test ettik",
            body:
              "Seanslar yalnızca katılımcılar iyi hissettiğinde değil, alevlenme dönemlerinde de planlandı. Bu; punto boyutunu, metin uzunluğunu ve tüm ilk kullanım akışını değiştirdi.",
          },
        ],
        outcome: [
          "Üründe kontrast açısından WCAG 2.2 AAA; kendi beyanımızla değil dış denetimle doğrulandı.",
          "Günlük aktif kullanım %41 arttı. Katılımcılar uygulamayı \"yormuyor\" diye tarif etti; ölçülemez göründüğü kadarıyla asıl hedef buydu.",
        ],
        credits: [
          { role: "Ürün tasarımı", value: "Aktays" },
          { role: "Erişilebilirlik stratejisi", value: "Aktays" },
          { role: "Tasarım sistemi", value: "Aktays" },
          { role: "Klinik inceleme", value: "Halo Health" },
        ],
      },

      foundry: {
        intro:
          "Foundry'nin satış ekibi araştırma ve takip işlerine kişi başı haftada dokuz saat kaybediyordu. Bariz çözüm — giden mesajları otomatik üretmek — aynı zamanda mevcut yanıt oranlarını yok etmenin en hızlı yoluydu.",
        challenge: [
          "Tümüyle otomatik giden iletişimi kurmak kolaydır, fark etmek de. Alıcılar tanır ve yanıt oranı çöker. Değer hiçbir zaman daha çok mesaj üretmekte değildi; aynı sayıda mesajı araştırması yapılmış hâlde üretmekteydi.",
          "Ekip de haklı olarak şüpheciydi. Daha önce bunu vaat eden ve yanlış tanıdığı şirketler hakkında kendinden emin saçmalıklar üreten bir araç görmüşlerdi.",
        ],
        approach: [
          {
            title: "Yazmayı değil araştırmayı otomatikleştirdik",
            body:
              "Hat, her potansiyel müşteri için bir brief derliyor — yatırım, işe alım, son duyurular, ortak bağlantılar — ve duruyor. Mesajı bir insan yazıyor. Kazanılan saatler yazmaktan değil okumaktan geliyor.",
          },
          {
            title: "Her iddiayı izlenebilir yaptık",
            body:
              "Brief'teki her bilgi geldiği kaynağa bağlanıyor. Bir temsilci her şeyi tek tıkla kontrol edebiliyor; ekibi şüpheciden gönüllü kullanıcıya çeviren de bu oldu.",
          },
          {
            title: "Her mesajda insan imzası bıraktık",
            body:
              "Hiçbir şey kendi kendine gönderilmiyor. Giden her mesaj, brief'i okuyup göndermeyi seçen kişinin adıyla çıkıyor.",
          },
        ],
        outcome: [
          "Temsilci başına haftada dokuz saat tasarruf; başlangıç ölçümüyle aynı zaman takibi yöntemiyle doğrulandı.",
          "Yanıt oranı düşmek yerine %27 arttı — daha çok değil, daha iyi araştırılmış mesajlar.",
        ],
        credits: [
          { role: "Akış analizi", value: "Aktays" },
          { role: "Hat tasarımı & geliştirme", value: "Aktays" },
          { role: "İç araç arayüzü", value: "Aktays" },
          { role: "CRM entegrasyonu", value: "Foundry" },
        ],
      },
    },
  },

  services: {
    meta: {
      title: "Hizmetler — Aktays",
      description:
        "Web tasarımı ve geliştirme, mobil uygulama tasarımı, yapay zekâ akışları, marka ve tasarım sistemleri.",
    },
    eyebrow: "Hizmetler",
    title: "Dört disiplin, tek ekip.",
    lead:
      "Kapsamı bilerek dar tutuyoruz. Aşağıdaki her şey, ilk görüşmede tanıştığınız kişiler tarafından stüdyo içinde yapılıyor — sözleşme imzalanınca devredileceğiniz ikinci bir ekip yok.",
    deliverablesLabel: "Ne alıyorsunuz",
    engagements: {
      title: "Birlikte nasıl çalışıyoruz.",
      lead:
        "Geldiğinizde problem ne kadar tanımlıysa ona göre üç biçim. Projelerin çoğu biri olarak başlayıp diğerine dönüşüyor.",
      bestForLabel: "Şuna uygun",
      timelineLabel: "Tipik süre",
      items: [
        {
          name: "Teşhis",
          description:
            "Asıl problemin ne olduğunu çıkarmak için kısa ve sabit kapsamlı bir çalışma. Elinizde yazılı bir brief, bir öneri ve bir tahminle ayrılıyorsunuz — devamını bizimle yapsanız da yapmasanız da.",
          bestFor: "Bir şeyin yanlış olduğunu biliyorsunuz ama neyi önce düzelteceğinizi bilmiyorsunuz",
          timeline: "2–3 hafta",
        },
        {
          name: "Proje",
          description:
            "Ana çalışma biçimimiz. İki haftalık döngülerde tasarım ve geliştirme, her cuma bir demo; ilk eskizden lansmana ve sonrasındaki haftalara kadar.",
          bestFor: "Tasarlanıp yayına alınması gereken tanımlı bir iş",
          timeline: "8–16 hafta",
        },
        {
          name: "Sürekli iş ortaklığı",
          description:
            "Tasarım kapasitesine tek seferde değil sürekli ihtiyaç duyan ekipler için ayımızdan düzenli bir pay. Proje işlerini bastırmasın diye üst sınırı var.",
          bestFor: "Yanında bir tasarım fonksiyonu isteyen iç ekipler",
          timeline: "En az 6 ay",
        },
      ],
    },
    faq: {
      title: "Bize sorulanlar.",
      items: [
        {
          question: "Bir proje ne kadar tutuyor?",
          answer:
            "Teşhis çalışmaları 6.000 € civarında başlıyor. Projelerin çoğu, kapsama ve ne kadar geliştirme içerdiğine göre 25.000 € ile 80.000 € arasında. İlk görüşmeden sonra saatlik ücret değil sabit fiyat veriyoruz — taahhüt etmeden önce ne harcadığınızı bilmelisiniz.",
        },
        {
          question: "Geliştiriyor musunuz yoksa sadece tasarlıyor musunuz?",
          answer:
            "Geliştiriyoruz. Hayata geçmeyen tasarım tasarım değil, süslemedir. Web işlerimizin çoğu, ekibinizin sahiplenebileceği üretime hazır bir Next.js kod tabanı olarak teslim ediliyor. Mobilde tasarlayıp prototipliyor, sonra geliştirme boyunca mühendislerinizle birlikte çalışıyoruz.",
        },
        {
          question: "İşi gerçekte kim yapıyor?",
          answer:
            "İlk görüşmede tanıştığınız kişiler. Bilinçli olarak küçük kalıyor ve yılda altı civarı proje alıyoruz; bunu söz verebilmemizin tek sebebi de bu.",
        },
        {
          question: "Ne kadar dahil olmamız gerekiyor?",
          answer:
            "Haftada iki saat kadar — bir cuma demosu ve bir çalışma seansı. Dikkatinizin küçük bir kısmını düzenli almayı, sonunda hiçbir şeyi değiştiremeyecek kadar geçken büyük bir kısmını almaya tercih ederiz.",
        },
        {
          question: "Lansmandan sonra ne oluyor?",
          answer:
            "İlk gerçek kullanıcıların bulduklarını düzeltmek için dört hafta kalıyoruz, sonra ekibinizin üzerine inşa edebileceği dokümantasyonu devrediyoruz. Müşterilerin çoğu ihtiyaç duymadıkları bir sürekli anlaşmada kalmak yerine sonraki iş için geri geliyor.",
        },
        {
          question: "Gizlilik sözleşmesi imzalıyor musunuz?",
          answer:
            "Evet, rutin olarak. Sözleşmenizi gönderin, ilk esaslı görüşmeden önce imzalayalım.",
        },
      ],
    },
    cta: {
      title: "Ne kurduğunuzu anlatın.",
      lead:
        "Kabaca bir kapsam ve bütçe aralığı başlamak için yeterli. Her mesaja iki iş günü içinde dönüyoruz.",
      action: "Projeye başla",
    },
  },

  studio: {
    meta: {
      title: "Stüdyo — Aktays",
      description:
        "İstanbul merkezli bağımsız bir tasarım stüdyosu; dünya genelinde kurucular ve ürün ekipleriyle çalışıyor.",
    },
    eyebrow: "Stüdyo",
    title: "Bilerek küçük ve öyle kalıyor.",
    lead:
      "Aktays, İstanbul merkezli bağımsız bir tasarım stüdyosu. Çoğu kişinin atladığı detayları önemseyen kurucular, ürün ekipleri ve pazarlama yöneticileriyle çalışıyoruz.",
    story: [
      "Stüdyo, büyük ajansların içinden defalarca gördüğümüz bir örüntü yüzünden var: işi kazananlar nadiren işi yapanlardı. Bir proje onu geliştirecek ekibe ulaştığında, onu iyi yapan düşünce çoktan bir sunuma özetlenmiş ve kaybolmuş oluyordu.",
      "Biz de tersini kurduk. İlk görüşmenizde oturan herkes, iş yayına çıkana kadar projede kalıyor. Araya müşteri temsilcisi katmanı, devir teslim ya da bütçenizi sessizce devralan junior bir ekip girmiyor.",
      "Bu kararın bir bedeli var ve bu konuda dürüst olmayı tercih ederiz: yılda yalnızca altı civarı proje alabiliyoruz. Kabul ettiğimizden fazlasını geri çeviriyoruz ve bir iş için doğru stüdyo değilsek bunu söyleyip sizi daha iyi bir adrese yönlendiriyoruz.",
      "İngilizce, Türkçe ve Arapça çalışıyor, çoğunlukla uzaktan ilerliyor ve dokuz ülkede iş teslim etmiş bulunuyoruz. İstanbul bizim bulunduğumuz yer; sizin nerede olduğunuza dair bir kısıt değil.",
    ],
    principles: {
      title: "Neye tutunuyoruz.",
      items: [
        {
          title: "Brief bir hipotezdir",
          body:
            "Elinizde gelen brief, probleme dair en iyi tahmininizdir. İlk işimiz onu sınamak; bu bazen ilk hafta yanlış olduğunu söylemek anlamına gelir. O konuşma rahatsız edicidir ve yaptığımız en değerli şeydir.",
        },
        {
          title: "İşi erken ve bitmemiş gösterin",
          body:
            "İkinci haftadan itibaren her cuma gerçek bir tarayıcıda demo. Ay sonundaki cilalı sunumlar müşteriyi değil tasarımcıyı korur. Erken ve ham olan, fikrinizi hâlâ ucuzken değiştirme imkânı verir.",
        },
        {
          title: "Mecranın içinde tasarlayın",
          body:
            "Statik maketler hareket, uzun metin, yavaş bağlantı ve küçük ekran konusunda yalan söyler. Elimizden geldiğince erken tarayıcıda tasarlıyoruz; böylece onayladığınız şey yayına çıkan şey oluyor.",
        },
        {
          title: "Süslemeden önce kısıtlar",
          body:
            "Erişilebilirlik, performans ve içerik yapısı, herhangi bir şey biçimlendirilmeden önce karara bağlanır. Sonradan eklemek daha pahalıya mal olur ve daha kötü iş üretir.",
        },
        {
          title: "Sürdürülebilir bırakın",
          body:
            "Kendimizi vazgeçilmez kılmaya çalışmıyoruz. Her proje, ekibinizin bizsiz genişletebileceği bir dokümantasyon ve sistemle bitiyor. Geri dönmek bir bağımlılık değil, bir tercih olmalı.",
        },
      ],
    },
    disciplines: {
      title: "Gerçekte ne yapıyoruz.",
      lead: "Bilinçli olarak iç içe geçen dört disiplin, tamamı stüdyo içinde.",
      items: [
        "Sanat yönetimi",
        "Web tasarımı",
        "Tasarım mühendisliği",
        "Next.js geliştirme",
        "Mobil ürün tasarımı",
        "Prototipleme",
        "Tasarım sistemleri",
        "Marka kimliği",
        "Tipografi",
        "Hareket tasarımı",
        "Yapay zekâ akış tasarımı",
        "Otomasyon mühendisliği",
        "İç araçlar",
        "Erişilebilirlik",
        "Performans",
        "Araştırma",
      ],
    },
    rhythm: {
      title: "Bir proje nasıl işliyor.",
      lead: "Dört aşama, haftalık demolar ve daha bitmeden önünüzde çalışan bir şey.",
      items: [
        {
          title: "1. hafta — Dinleme",
          body:
            "Tasarım dosyasını açmadan önce ekibinizle, müşterilerinizle ve verinizle konuşuyoruz. Kendisi için yapılan atölyeler yok; yalnızca ne inşa edileceğini değiştiren sorular.",
        },
        {
          title: "2. hafta — Çerçeveleme",
          body:
            "Problem, küçük bir ekibin çözebileceği bir şeye daraltılıp tek sayfaya yazılıyor. Bir sayfaya sığmıyorsa henüz yeterince anlamamışız demektir.",
        },
        {
          title: "3–12. haftalar — Üretim",
          body:
            "Tasarım ve geliştirme iki haftalık döngülerde birlikte. Her cuma gerçek tarayıcıda gerçek ekranlar. Yön değiştirmek hâlâ ucuzken bizi yönlendiriyorsunuz.",
        },
        {
          title: "Lansmandan sonra — Yerleşme",
          body:
            "Yayına alıyor, izliyor ve ilk bin kullanıcının bulduklarını düzeltmek için dört hafta kalıyoruz. Sonra dokümantasyon ve gerçekten kullanılmak üzere yapılmış bir devir teslim.",
        },
      ],
    },
    cta: {
      title: "Uyabileceğimizi mi düşünüyorsunuz?",
      lead:
        "Ne yaptığınızı ve kabaca ne zaman gerektiğini yazın. Doğru adres değilsek bunu söyler, olan birini öneririz.",
      action: "Konuşmaya başla",
    },
  },

  contact: {
    meta: {
      title: "İletişim — Aktays",
      description:
        "Projenizi anlatın. Her başvuruya iki iş günü içinde dönüyoruz.",
    },
    eyebrow: "İletişim",
    title: "Kaydırmaya değer bir şey kuralım.",
    lead:
      "Şimdi ne kadar çok anlatırsanız ilk yanıtımız o kadar işe yarar olur. Kaba hâli yeterli — konuşmaya başlamak için bitmiş bir brief gerekmiyor.",
    directTitle: "Ya da doğrudan ulaşın",
    responseNote: "Her başvuruya iki iş günü içinde dönüyoruz.",
    form: {
      legend: "Proje başvurusu",
      name: { label: "Adınız", placeholder: "Ayşe Yılmaz" },
      email: { label: "E-posta", placeholder: "ayse@sirket.com" },
      company: { label: "Şirket", placeholder: "Şirket adı" },
      projectType: {
        label: "Neye ihtiyacınız var?",
        options: [
          "Web tasarımı & geliştirme",
          "Mobil uygulama tasarımı",
          "Yapay zekâ akışları",
          "Marka & tasarım sistemleri",
          "Henüz emin değilim",
        ],
      },
      budget: {
        label: "Bütçe aralığı",
        options: [
          "25.000 € altı",
          "25.000 € – 50.000 €",
          "50.000 € – 80.000 €",
          "80.000 € üzeri",
          "Henüz emin değilim",
        ],
      },
      timeline: {
        label: "Zaman planı",
        options: [
          "En kısa sürede",
          "3 ay içinde",
          "3–6 ay içinde",
          "Sadece araştırıyorum",
        ],
      },
      message: {
        label: "Projeyi anlatın",
        placeholder: "Ne kuruyorsunuz, kimin için ve başarı neye benziyor?",
      },
      selectPlaceholder: "Bir seçenek seçin",
      optional: "isteğe bağlı",
      consentBefore: "Bunu göndererek ",
      consentLink: "Gizlilik Politikamızı",
      consentAfter: " kabul etmiş olursunuz. Bilgilerinizi yalnızca bu başvuruyu yanıtlamak için kullanıyoruz.",
      submit: "Başvuruyu gönder",
      sending: "Gönderiliyor…",
      successTitle: "Teşekkürler — ulaştı.",
      successBody:
        "Her başvuruyu kendimiz okuyor ve iki iş günü içinde dönüyoruz. Acilse doğrudan e-posta gönderin.",
      errorTitle: "Gönderilemedi.",
      errorBody:
        "Bizim tarafımızda bir şeyler ters gitti. Lütfen tekrar deneyin veya doğrudan e-posta gönderin; hemen ele alalım.",
      notConfiguredTitle: "Form henüz bağlı değil.",
      notConfiguredBody:
        "Bu site için e-posta gönderimi yapılandırılmamış. Lütfen doğrudan e-posta gönderin; her zamanki gibi dönüş yapalım.",
      requiredError: "Bu alan zorunlu.",
      emailError: "Lütfen geçerli bir e-posta adresi girin.",
      messageError: "Lütfen en az bir iki cümle yazın.",
    },
  },
};
