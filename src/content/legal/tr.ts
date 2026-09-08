import type { LegalContent } from "./types";

export const tr: LegalContent = {
  index: {
    meta: {
      title: "Yasal — Aktays",
      description:
        "aktays.com için gizlilik politikası, kullanım koşulları, çerez politikası ve erişilebilirlik beyanı.",
    },
    eyebrow: "Yasal",
    title: "Küçük yazılar, sade bir dille.",
    lead:
      "Bunları da diğer her şeyi yazdığımız gibi yazmaya çalıştık: açık şekilde ve önemli hiçbir şeyi uzun bir paragrafın ortasına saklamadan.",
  },
  updatedLabel: "Son güncelleme",
  contentsLabel: "İçindekiler",
  companyLabels: {
    legalName: "Ticari unvan",
    address: "Kayıtlı adres",
    registration: "Ticaret sicil no.",
    taxOffice: "Vergi dairesi",
    taxNumber: "Vergi numarası",
    email: "E-posta",
  },

  docs: [
    {
      slug: "privacy",
      title: "Gizlilik Politikası",
      summary:
        "Neyi topluyoruz, neden, kiminle paylaşıyoruz ve bunun üzerinde hangi haklara sahipsiniz — hem KVKK hem GDPR kapsamında.",
      sections: [
        {
          heading: "Kimiz",
          body: [
            "Aktays, İstanbul merkezli bağımsız bir tasarım stüdyosudur. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) bakımından veri sorumlusu, Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) bakımından ise aşağıda tanımlanan kişisel verilerin kontrolörüyüz.",
          ],
          showCompanyDetails: true,
        },
        {
          heading: "Bu politika neyi kapsıyor",
          body: [
            "Bu politika, bu web sitesi üzerinden işlediğimiz kişisel verileri kapsar. İmzalı bir müşteri sözleşmesi kapsamında işlediğimiz verileri kapsamaz; onlar sözleşmenin kendi veri işleme hükümlerine tabidir.",
          ],
        },
        {
          heading: "Neleri topluyoruz",
          body: [
            "Bize verdiğiniz bilgiler. Başvuru formunu gönderirseniz adınızı, e-posta adresinizi, şirket adınızı, seçtiğiniz proje türü, bütçe aralığı ve zaman planını ve mesaj alanına yazdıklarınızı alırız. Formda gizlice toplanan hiçbir şey yok — gördüğünüz şey aldığımız şeydir.",
            "Otomatik toplanan bilgiler. Barındırma sağlayıcımız her istek için standart sunucu kayıtları tutar: IP adresi, zaman damgası, istenen adres, yönlendiren sayfa ve tarayıcı bilgisi. Bunlar bizim eklediğimiz bir takip koduyla değil, güvenlik ve süreklilik amacıyla altyapı tarafından üretilir.",
            "Çerezler. Bu site tek bir çerez kullanır ve yalnızca siz aktif olarak bir dil seçtiğinizde. Ayrıntısı Çerez Politikamızda.",
          ],
        },
        {
          heading: "Neleri toplamıyoruz",
          body: [
            "Bu konuda net olmak istiyoruz, çünkü gizlilik politikalarının çoğu değil. Bu sitede analitik yok, reklam pikseli yok, oturum kaydı yok, ısı haritası yok, A/B testi aracı yok ve hiçbir türden üçüncü parti takip scripti yok. Sizin profilinizi çıkarmıyoruz; reklamverenlerle veri paylaşmıyor ya da satmıyoruz, çünkü satacak verimiz yok.",
          ],
        },
        {
          heading: "Neden kullanıyoruz ve hukuki sebebimiz",
          bullets: [
            "Başvurunuzu yanıtlamak ve ardından gelen görüşmeyi yürütmek. Hukuki sebep: sözleşmenin kurulması veya ifası (GDPR m. 6(1)(b)); KVKK m. 5(2)(c).",
            "Siteyi güvenli, erişilebilir ve kötüye kullanımdan uzak tutmak. Hukuki sebep: meşru menfaat (GDPR m. 6(1)(f)); KVKK m. 5(2)(f).",
            "Dil tercihinizi hatırlamak. Hukuki sebep: sitenin beklediğiniz gibi çalışmasına ilişkin meşru menfaatimiz (GDPR m. 6(1)(f)). Bu çerez tamamen işlevseldir ve yalnızca siz bir dil seçtiğinizde kurulur.",
            "Müşterimiz olmanız hâlinde muhasebe ve vergi yükümlülüklerini yerine getirmek. Hukuki sebep: hukuki yükümlülük (GDPR m. 6(1)(c)); KVKK m. 5(2)(a).",
          ],
        },
        {
          heading: "Kiminle paylaşıyoruz",
          body: [
            "Her biri talimatlarımız doğrultusunda veri işleyen sıfatıyla hareket eden az sayıda hizmet sağlayıcı kullanıyoruz. Kişisel verilerinizi başka kimseyle paylaşmıyoruz.",
            "Yazı karakterlerimiz bir font CDN'inden değil doğrudan bu alan adından sunuluyor; dolayısıyla bir sayfayı açmanız hiçbir üçüncü tarafa veri göndermiyor.",
          ],
          bullets: [
            "Vercel Inc. — web sitesi barındırma ve sunucu kayıtları.",
            "Resend (Plus Five Five, Inc.) — form üzerinden gönderilen başvuru e-postalarının iletimi.",
            "E-posta sağlayıcımız — çünkü başvurunuz gelen kutumuza düşer ve orada kalır.",
          ],
        },
        {
          heading: "Yurt dışına aktarım",
          body: [
            "Yukarıdaki sağlayıcılar Türkiye dışında ve bazı durumlarda Avrupa Ekonomik Alanı dışında altyapı işletmektedir. AEA dışına aktarılan kişisel veriler bakımından bu aktarımlar, Avrupa Komisyonu'nun Standart Sözleşme Hükümleri veya sağlayıcının sunduğu eşdeğer bir güvence kapsamındadır. KVKK kapsamında yurt dışına aktarımda, gerekli hâllerde açık rızanıza ya da Kanun'un 9. maddesinde öngörülen şartlara dayanıyoruz.",
          ],
        },
        {
          heading: "Ne kadar süre saklıyoruz",
          bullets: [
            "Projeye dönüşmeyen başvurular: geri döndüğünüzde bağlamı bilelim diye en fazla 24 ay, ardından siliniyor.",
            "Projeye dönüşen başvurular: çalışma süresince ve sonrasında Türk vergi ve ticaret mevzuatının kayıtları saklamamızı gerektirdiği süre boyunca — genel olarak 10 yıl.",
            "Sunucu kayıtları: barındırma sağlayıcımız tarafından kısa ve dönen bir pencerede, tipik olarak 30 günü aşmayacak şekilde.",
            "Dil çerezi: 12 ay veya siz silene kadar.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            "GDPR kapsamında kişisel verilerinize erişme, yanlış verilerin düzeltilmesini isteme, silinmesini talep etme, işlemeyi kısıtlama veya işlemeye itiraz etme, veri taşınabilirliği ve işleme rızaya dayanıyorsa rızayı geri çekme haklarına sahipsiniz.",
            "KVKK'nın 11. maddesi uyarınca; kişisel verinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, düzeltme ve silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonuç doğmasına itiraz etme ve kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
          ],
        },
        {
          heading: "Haklarınızı nasıl kullanırsınız",
          body: [
            "Bize e-posta gönderin; hem GDPR hem KVKK'nın öngördüğü üzere 30 gün içinde yanıt verelim. Talebi kimin yaptığından başka türlü emin olamadığımız hâllerde kimliğinizi doğrulamanızı isteyebiliriz.",
            "Yanıtımızdan memnun kalmazsanız Kişisel Verileri Koruma Kurumu'na (kvkk.gov.tr) veya AEA'da bulunuyorsanız yaşadığınız ülkedeki denetim makamına şikâyette bulunabilirsiniz.",
          ],
        },
        {
          heading: "Güvenlik",
          body: [
            "Site HTTPS üzerinden sunulur. Form gönderimleri iletilmeden önce sunucu tarafında doğrulanır ve hız sınırına tabi tutulur. Gelen kutumuza erişim çok faktörlü kimlik doğrulamayla korunur. Hiçbir sistem kusursuz güvenli değildir; bunu ima etmek yerine açıkça söylemeyi tercih ederiz.",
          ],
        },
        {
          heading: "Çocuklar",
          body: [
            "Bu site işletmelere yöneliktir ve çocuklara yönelik değildir. 18 yaşından küçüklerden bilerek kişisel veri toplamıyoruz.",
          ],
        },
        {
          heading: "Bu politikadaki değişiklikler",
          body: [
            "Kişisel verileri ele alış biçimimizi değiştirirsek bu sayfayı ve üstündeki tarihi güncelleriz. Esaslı değişiklikler metnin içine sessizce karıştırılmak yerine burada açıklanır.",
          ],
        },
      ],
    },

    {
      slug: "terms",
      title: "Kullanım Koşulları",
      summary:
        "Bu web sitesini hangi koşullarla kullandığınız. Müşteri işleri bu sayfaya değil, ayrı bir imzalı sözleşmeye tabidir.",
      sections: [
        {
          heading: "Bu koşullar hakkında",
          body: [
            "Bu koşullar bu web sitesini kullanımınızı düzenler. Siteyi kullanarak bunları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen siteyi kullanmayı bırakın.",
            "Müşteri çalışmaları; kapsam, ücretler, fikrî mülkiyet, gizlilik ve sorumluluğu düzenleyen ayrı bir yazılı sözleşmeye tabidir. O sözleşme ile bu sayfa çeliştiğinde imzalı sözleşme geçerlidir.",
          ],
          showCompanyDetails: true,
        },
        {
          heading: "Siteyi kullanmak",
          body: [
            "Bu sitedeki sayfaları kendi referansınız için ve bizimle çalışıp çalışmayacağınızı değerlendirmek amacıyla görüntüleyebilir, gezebilir ve yazdırabilirsiniz. Bu izin, içeriğimizi ticari olarak yeniden yayımlamayı veya işimizi kendi işiniz gibi sunmayı kapsamaz.",
          ],
        },
        {
          heading: "Fikrî mülkiyet",
          body: [
            "Bu sitedeki tüm içerik — metin, düzen, tipografi, görseller, kod ve tasarım — Aktays'a aittir veya izinle kullanılmaktadır ve telif hakkı ile bağlantılı haklarla korunmaktadır.",
            "Aktays adı ve logosu bize aittir. Lütfen bunları var olmayan bir ilişki, onay veya ortaklık ima edecek şekilde kullanmayın.",
          ],
        },
        {
          heading: "Burada gösterilen müşteri işleri",
          body: [
            "Vaka çalışmaları ilgili müşterinin izniyle veya tanımlayıcı ayrıntılar çıkarılarak yayımlanır. Müşterilere ait markalar ve ticari adlar o müşterilerin mülkiyetinde kalır ve burada yalnızca yaptığımız işi tarif etmek için yer alır.",
            "Vaka çalışmalarında verilen rakamlar, belirli bir müşteri için belirli bir bağlamdaki sonuçları tarif eder. Orada olanı örneklendirir; sizde ne olacağına dair bir taahhüt değildir.",
          ],
        },
        {
          heading: "Kabul edilebilir kullanım",
          body: ["Şunları yapmamayı kabul edersiniz:"],
          bullets: [
            "siteyi hukuka aykırı biçimde ya da başkalarının haklarını ihlal edecek şekilde kullanmak;",
            "siteye, sunucusuna veya bağlı herhangi bir sisteme yetkisiz erişim sağlamaya çalışmak;",
            "başvuru formu üzerinden yanlış, saldırgan veya kasten yanıltıcı bilgi göndermek;",
            "formu istenmeyen ticari mesaj göndermek için kullanmak;",
            "sitenin içeriğini kazımak, aynalamak veya sistematik olarak çekmek;",
            "bilerek zararlı yazılım bulaştırmak veya sitenin erişilebilirliğini başka şekilde bozmaya çalışmak.",
          ],
        },
        {
          heading: "Başvurular sözleşme değildir",
          body: [
            "Başvuru formunu göndermek bir sözleşme kurmaz ve bu sitedeki hiçbir şey kabule elverişli bir icap değildir. Burada belirtilen fiyat ve süreler yaklaşıktır. Çalışma yalnızca iki taraf yazılı bir sözleşme imzaladığında başlar.",
          ],
        },
        {
          heading: "Diğer sitelere bağlantılar",
          body: [
            "Başka yerlere bağlantı verdiğimizde bunu faydalı olduğunu düşündüğümüz için yaparız. O siteleri kontrol etmiyoruz; içeriklerinden veya gizlilik uygulamalarından sorumlu değiliz.",
          ],
        },
        {
          heading: "Erişilebilirlik ve süreklilik",
          body: [
            "Siteyi erişilebilir tutmayı hedefliyoruz ancak kesintisiz veya hatasız olacağını garanti etmiyoruz. Herhangi bir bölümünü önceden bildirmeksizin değiştirebilir, askıya alabilir veya kaldırabiliriz.",
          ],
        },
        {
          heading: "Sorumluluğun sınırlandırılması",
          body: [
            "Site olduğu gibi sunulur. Hukukun izin verdiği azami ölçüde, siteyi kullanmanızdan doğan dolaylı veya sonuç niteliğindeki zararlar ile kâr, gelir, veri ve itibar kaybına ilişkin sorumluluğu bertaraf ediyoruz.",
            "Bu koşullardaki hiçbir hüküm; ihmalden kaynaklanan ölüm veya bedensel zarara, hileye ya da hukuken sınırlandırılamayacak diğer hâllere ilişkin sorumluluğu sınırlamaz veya ortadan kaldırmaz.",
          ],
        },
        {
          heading: "Uygulanacak hukuk",
          body: [
            "Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Bunlardan doğan uyuşmazlıklarda İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri münhasıran yetkilidir.",
            "AEA'da yerleşik bir tüketiciyseniz bu hüküm, yaşadığınız ülkenin emredici tüketici hukukunun sağladığı korumadan sizi yoksun bırakmaz.",
          ],
        },
        {
          heading: "Değişiklikler",
          body: [
            "Bu koşulları güncelleyebiliriz. Geçerli olan, burada yayımlanan sürümdür; üstteki tarih en son ne zaman değiştiğini gösterir.",
          ],
        },
      ],
    },

    {
      slug: "cookies",
      title: "Çerez Politikası",
      summary:
        "Bu site tam olarak tek bir çerez kullanır ve yalnızca siz dil seçtiğinizde. Analitik ve takip yok.",
      sections: [
        {
          heading: "Kısa hâli",
          body: [
            "Tek bir çerez; yalnızca dili aktif olarak değiştirirseniz kurulur ve bir dahaki sefere yanlış dile düşmeyesiniz diye bu tercihi hatırlar. Analitik yok, reklam yok, takip yok ve çerez bandı yok — çünkü burada rıza gerektiren hiçbir şey yok.",
          ],
        },
        {
          heading: "Çerez nedir",
          body: [
            "Çerez, bir web sitesinin tarayıcınızdan saklamasını istediği küçük bir metin dosyasıdır. Daha sonra onu kuran site tarafından okunabilir. Çerezler tercihleri hatırlamak için faydalıdır; aynı zamanda internette takibin ana mekanizmasıdır. Fark tamamen sitenin onlarla ne yapmayı seçtiğindedir.",
          ],
        },
        {
          heading: "Kullandığımız çerez",
          bullets: [
            "Adı: NEXT_LOCALE",
            "Amacı: İngilizce, Türkçe veya Arapça seçiminizi hatırlar; bir sonraki ziyaretinizde doğru dile düşersiniz.",
            "Ne zaman kurulur: yalnızca dil değiştiriciden bir dile tıkladığınızda. Siteyi ziyaret etmek tek başına kurmaz.",
            "İçeriği: iki harfli bir dil kodu — en, tr veya ar. Başka hiçbir şey ve sizi tanımlayan hiçbir şey yok.",
            "Ömrü: 12 ay.",
            "Türü: tamamen işlevsel. ePrivacy Direktifi ve Türk mevzuatı kapsamında rızadan muaftır, çünkü yalnızca az önce istediğiniz şeyi yapar.",
          ],
        },
        {
          heading: "Kullanmadıklarımız",
          body: [
            "Google Analytics veya başka bir analitik yok. Reklam veya yeniden pazarlama pikseli yok. Sosyal medya takibi yok. Oturum kaydı veya ısı haritası yok. Siteler arası tanımlayıcı yok. Bu sayfayı kaç kişinin ziyaret ettiğini bilmiyoruz ve bununla yaşayabileceğimize karar verdik.",
          ],
        },
        {
          heading: "Üçüncü parti istekler",
          body: [
            "Yok. Yazı karakterlerimiz bir font CDN'inden değil doğrudan bu alan adından sunuluyor; dolayısıyla bir sayfayı açmak bizden başka kimseyle iletişim kurmuyor. Adını anmaya değer tek şey kendi barındırma altyapımız.",
          ],
          bullets: [
            "Barındırma kayıtları: barındırma sağlayıcımız Vercel, güvenlik ve süreklilik için IP adresleri dâhil standart sunucu kayıtları tutar. Bu bir çerez değil altyapı kaydıdır ve siteyi ziyaret etmemek dışında devre dışı bırakılamaz.",
          ],
        },
        {
          heading: "Çerezleri yönetmek",
          body: [
            "Bütün büyük tarayıcılar ayarlarından çerezleri görüntülemenize, engellemenize ve silmenize izin verir. Kurduğumuz tek çerez bir dil tercihi olduğundan, engellemenin tek maliyeti sitenin ziyaretler arasında dilinizi hatırlamamasıdır.",
          ],
        },
        {
          heading: "Değişiklikler",
          body: [
            "Bir gün çerez eklersek bu sayfa o çerez görünmeden önce bunu söyleyecek — ve tamamen işlevsel olmayan bir şeyse önce rızanızı isteyeceğiz.",
          ],
        },
      ],
    },

    {
      slug: "accessibility",
      title: "Erişilebilirlik Beyanı",
      summary:
        "Neyi hedefliyoruz, gerçekte ne yaptık ve neyin hâlâ kusurlu olduğunu biliyoruz.",
      sections: [
        {
          heading: "Taahhüdümüz",
          body: [
            "Müşterilerimiz için erişilebilir ürünler tasarlıyoruz; kendi sitemizi aynı standarda tutmamayı savunmak zor olurdu. Bu beyan, sitenin şu anda nerede durduğunu — bitmemiş kısımları dâhil — anlatıyor.",
          ],
        },
        {
          heading: "Hedeflenen uyum düzeyi",
          body: [
            "WCAG 2.2 AA seviyesini hedefliyoruz. Üçüncü taraf bir denetime değil kendi testlerimize dayanarak sitenin büyük ölçüde uyumlu olduğunu düşünüyoruz. Bu cümledeki \"büyük ölçüde\" gerçek bir iş yapıyor: kapsamlı test ettik ama bağımsız bir değerlendirme yaptırmadık.",
          ],
        },
        {
          heading: "Ne yaptık",
          bullets: [
            "Her sayfada tek ve mantıklı bir başlık sırasıyla anlamsal HTML.",
            "Tüm içeriğe klavyeyle erişilebiliyor ve hiçbir zaman kaldırılmayan görünür bir odak göstergesi var.",
            "Sitede kullanılan her zemine karşı AA'yı karşılayan veya aşan metin kontrastı.",
            "Sistemi azaltılmış hareket isteyen ziyaretçiler için animasyon ve yumuşak kaydırma tamamen kapatılıyor.",
            "Görünüme animasyonla giren metinler baştan sayfada bulunuyor; böylece animasyon çalışsın ya da çalışmasın ekran okuyucular ve arama motorları için erişilebilir kalıyor.",
            "Arapçada, aynalanmış bir stil dosyası yerine mantıksal CSS özellikleriyle tam sağdan sola desteği.",
            "Gerçek etiketleri olan form alanları, yardımcı teknolojiye duyurulan hatalar ve etiket yerine yer tutucu metne güvenmeme.",
            "Görüntü alanına göre ölçeklenen ve %200 tarayıcı yakınlaştırmasında içerik kaybı olmadan çalışan tipografi.",
          ],
        },
        {
          heading: "Bilinen sınırlamalar",
          body: ["Bunları yokmuş gibi davranmak yerine listelemeyi tercih ediyoruz."],
          bullets: [
            "Vaka çalışması görselleri dekoratiftir ve bilgi taşımadığı için metin alternatifi içermez. Gerçek fotoğraflarla değiştirirsek bunun yeniden ele alınması gerekecek.",
            "Özel imleç dekoratiftir ve yalnızca hassas işaretleme cihazlarında görünür; azaltılmış hareket tercihinde gizlenir ancak her yardımcı teknoloji kombinasyonuyla test edilmemiştir.",
            "Bağımsız bir erişilebilirlik denetimi yaptırmadık. Testlerimiz kapsamlı ama kendi testlerimiz.",
          ],
        },
        {
          heading: "Nasıl test ediyoruz",
          body: [
            "Her sayfada yalnızca klavyeyle gezinme, geliştirme sırasında otomatik kontroller, tasarım token'larına karşı doğrulanan renk kontrastı ve %200 yakınlaştırmada ve küçük ekranlarda manuel test. Ekran okuyucu testi sürekli değil dönemseldir.",
          ],
        },
        {
          heading: "Bir şey bozuksa bize söyleyin",
          body: [
            "Bu sitede bir engelle karşılaşırsanız lütfen ne olduğunu ve ne kullandığınızı yazıp e-posta gönderin. Erişilebilirlik bildirimlerini özellik talebi değil hata olarak ele alıyoruz ve düzeldiğinde size haber veriyoruz.",
          ],
        },
      ],
    },
  ],
};
