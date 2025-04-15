function gerarAtestado() {
    const { jsPDF } = window.jspdf;
    const pacienteNome = document.getElementById("nomePaciente").value;
    const medicoNome = document.getElementById("nomeMedico").value;
    const crmMedico = document.getElementById("crmMedico").value;
    const dataInicio = document.getElementById("dataInicio").value;
    const dataTermino = document.getElementById("dataTermino").value;
    const dataEmissao = new Date().toLocaleDateString();
  
    if (!pacienteNome || !medicoNome || !dataInicio || !dataTermino || !crmMedico) {
      document.getElementById("status").innerText = "Por favor, preencha todos os campos.";
      return;
    }
  
    document.getElementById("status").innerText = "Gerando Atestado...";
    const doc = new jsPDF();
  
    doc.setFont("times", "normal");
    doc.setFontSize(20);
    doc.text("Atestado Médico - Hospital Copacabana", 105, 30, null, null, "center");
  
    doc.setFontSize(12);
    doc.text(`Eu, Dr(a). ${medicoNome}, CRM ${crmMedico},`, 20, 50);
    doc.text(`atesto que o(a) paciente ${pacienteNome}, esteve sob meus cuidados médicos`, 20, 60);
    doc.text(`no período de ${formatarData(dataInicio)} a ${formatarData(dataTermino)},`, 20, 70);
    doc.text(`estando inapto(a) para o desempenho de suas atividades habituais.`, 20, 80);
  
    doc.text("Emitido para fins de comprovação de afastamento médico.", 20, 95);
    doc.text(`Data de emissão: ${dataEmissao}`, 20, 110);
  
    doc.text("Assinatura do Médico:", 20, 135);
    doc.line(20, 140, 180, 140);
    doc.text(`${medicoNome} - CRM: ${crmMedico}`, 20, 147);
  
    doc.text("Hospital Copacabana", 105, 280, null, null, "center");
  
    doc.save(`${pacienteNome}_atestado.pdf`);
    document.getElementById("status").innerText = "Atestado Gerado com sucesso!";
  }
  
  function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR');
  }
  