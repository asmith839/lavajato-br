import { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');

  const enviarWhatsApp = () => {
    const numeroDestino = '5584998326746';
    const texto = `Olá, meu nome é ${nome}. Quero agendar o serviço: ${servico}. Meu telefone: ${telefone}`;
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>lavajato.br</h1>
      <p>Agende sua lavagem com praticidade e pague via Pix!</p>
      <input type="text" placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} style={{ width: '100%', marginBottom: 10 }} />
      <input type="text" placeholder="Seu telefone" value={telefone} onChange={e => setTelefone(e.target.value)} style={{ width: '100%', marginBottom: 10 }} />
      <textarea placeholder="Serviço desejado" value={servico} onChange={e => setServico(e.target.value)} style={{ width: '100%', marginBottom: 10 }} />
      <button onClick={enviarWhatsApp} style={{ width: '100%', backgroundColor: '#25D366', color: '#fff', padding: 10, border: 'none', borderRadius: 5 }}>
        Agendar pelo WhatsApp
      </button>
    </div>
  );
}