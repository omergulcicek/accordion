# Accordion

Tıklandığında detayı açılan menüler.

---

Kod HTML'deki `<details> <summary>` taglari yardımıyla oluşmuştur.

2 çeşit accordion menü vardır.

1. Eğer bir içerik açıkken, diğeride açılabilecekse (*yani ikinci içerik açıldığında ilki kapanmayacaksa*) **sadece HTML yeterlidir**.

```html
<div class="accordion">
  <details open>
    <summary>Başlık</summary>
    <p>İçerik</p>
  </details>

  <details>
    <summary>Başlık</summary>
    <p>İçerik</p>
  </details>
</div>
```

2. Fakat bir içerik açıldığında diğer tüm içerikler kapansın isteniyorsa class'lara `multi` sınıfı eklenmeli ve bu projedeki JavaScript kodu eklenmelidir.

```html
<div class="accordion multi">
  <details open>
    <summary>Başlık</summary>
    <p>İçerik</p>
  </details>

  <details>
    <summary>Başlık</summary>
    <p>İçerik</p>
  </details>
</div>
```

---

**NOT**: Proje CSS içermez.
