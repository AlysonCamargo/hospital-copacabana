function gerarReceita() {
    const { jsPDF } = window.jspdf;
    const pacienteNome = document.getElementById("nomePaciente").value;
    const medicoNome = document.getElementById("nomeMedico").value;
    const crmMedico = document.getElementById("crmMedico").value;
    const receitaTexto = document.getElementById("remedios").value;
    const assinaturaMedico = document.getElementById("assinaturaMedico").value;
    const dataEmissao = new Date().toLocaleDateString();
  
    if (!pacienteNome || !medicoNome || !receitaTexto || !assinaturaMedico || !crmMedico) {
      document.getElementById("status").innerText = "Por favor, preencha todos os campos.";
      return;
    }
  
    document.getElementById("status").innerText = "Gerando PDF...";
    const doc = new jsPDF();
  
    doc.setFont("times", "normal");
    doc.setFontSize(20);
    doc.text("Receita Médica - Hospital Copacabana", 105, 20, null, null, "center");
  
    doc.setFontSize(12);
    doc.text(`Data de Emissão: ${dataEmissao}`, 20, 35);
    doc.text(`Paciente: ${pacienteNome}`, 20, 45);
    doc.text("Remédios Prescritos:", 20, 60);
  
    const linhas = doc.splitTextToSize(receitaTexto, 170);
    doc.text(linhas, 20, 70);
  
    doc.text("Assinatura do Médico:", 20, 140);
    doc.line(20, 145, 180, 145);
    doc.text(`${assinaturaMedico} - CRM: ${crmMedico}`, 20, 152);
  
    doc.text("Hospital Copacabana", 105, 280, null, null, "center");
  
    doc.save(`${pacienteNome}_receita.pdf`);
    document.getElementById("status").innerText = "PDF Gerado com sucesso!";
  }
  