<script lang="ts">
  import { site } from '$lib/config';
</script>

<svelte:head>
  <title>くぼっち - 資金決済法に基づく表示</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>
<article class="prose">
  <header>
    <h1>資金決済法に基づく表示</h1>
  </header>
  <main>
    <section>
      <h2>事業者情報</h2>
      <p>事業者名: kubocchi.com</p>
      <p>代表者: {site.name}</p>
      <p>所在地：〒{site.postcode} {site.address}</p>
      <p>連絡先: {site.email}</p>
    </section>
    <section>
      <h2>支払可能金額等</h2>
      <p>本サービスで提供するポイントやバーチャル通貨の支払可能金額の上限は、1アカウントあたり100,000円までです。</p>
    </section>
    <section>
      <h2>有効期限</h2>
      <p>ポイントやバーチャル通貨の有効期限は、購入日から1年間です。</p>
    </section>
    <section>
      <h2>利用範囲</h2>
      <p>ポイントやバーチャル通貨は、本サービス内でのみ利用可能です。他のサービスや現金との交換はできません。</p>
    </section>
    <section>
      <h2>お問い合わせ先</h2>
      <p>本サービスに関するお問い合わせは、上記の連絡先までご連絡ください。</p>
    </section>
    <section>
      <h2>使用条件</h2>
      <p>ポイントやバーチャル通貨の使用には、本サービスの利用規約に従うものとします。詳細は利用規約をご確認ください。</p>
    </section>
    <section>
      <h2>未使用残高の確認方法</h2>
      <p>未使用のポイントやバーチャル通貨の残高は、ユーザーのアカウントページから確認できます。</p>
    </section>
    <section>
      <h2>利用停止等</h2>
      <p>ユーザーが本規約に違反した場合、事前の通知なくアカウントを停止または削除することがあります。これにより生じた損害について、当方は一切責任を負いません。</p>
    </section>
    <section>
      <h2>改定</h2>
      <p>本表示は、法令の変更やサービスの変更に伴い、事前の予告なく改定されることがあります。改定後の内容は本サイトに掲載された時点で効力を生じます。</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 kubocchi.com</p>
  </footer>
</article>