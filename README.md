# Tailwind Css 3.0 ve Next ile Fiyat Listesi Bileşen Tasarımı

Kaynak: [Building a Pricing Section With Tailwind CSS](https://www.youtube.com/watch?v=WMGFQwewVa4)

```js script
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

[heroicons tailwind css iconları](https://heroicons.com/)

## Aynı öğe içinde hizalama

```css
flex items-center 
```

<!-- Buton kodu -->
```css
<a
    href='#'
    className='block px-6 py-4 mt-8 text-sm font-semibold leading-4 text-center text-white rounded-lg shadow-md 
    bg-cyan-500 hover:bg-cyan-600'
>
```

Vurgulu ve vurgusuz buton kodları

```css
            <a
              href='#'
              className={`block px-6 py-4 mt-8 text-sm font-semibold leading-4 text-center rounded-lg   
              ${
                plan.mostPopular
                  ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
                  : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
              }
              `}
            >
              {plan.cta}
            </a>
```

![Buton resmi](2022-05-29-13-22-18.jpg)

**`Start your Trial`** butonunu aşağıya hizalama kodu.

1- Ana kapsayıcı `div` içinde `flex flex-col`

```css
    <div
        key={plan.title}
        className='relative flex flex-col p-8 mt-8 bg-white border shadow-lg border-slate-200 rounded-2xl'
        >

```

2- `ul` tagı içinde `flex-1` ile containeri aşağıya kadar yayıyoruz.

```css
    <ul className='flex-1 mt-6 space-y-4'>
```

![Hizalama Resmi](2022-05-29-15-02-51.jpg)

`Arka tarafa satır yönünde zemin döşeme`

```css
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col'>
        <div className='flex-1'></div>
        <div className='flex-1 bg-slate-100'></div>
      </div>
    ........ 
    /* Burada fiyat listesinin tüm divleri mevcut. */
    ........
  </div>
```

![Zemin döşeme](2022-05-29-15-03-33.jpg)
