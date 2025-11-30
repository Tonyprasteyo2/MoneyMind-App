<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="{{ asset('icons/money.png') }}" type="image/png" sizes="16x16">
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Aplikasi pencatatan pemasukan & pengeluaran dengan Tesacart dan analisis AI.">
    <meta name="keywords"
        content="pencatatan keuangan, pengeluaran, pemasukan, tesacart, ai analisis, money management">
    <meta name="robots" content="index, follow">
    <meta name="author" content="moneymind">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

<body>
    <div id="app"></div>
</body>

</html>
