document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const searchInput = document.getElementById("search-invoice");
  const invoiceTable = document.querySelector(".invoice-table tbody");
  const downloadButtons = document.querySelectorAll(".download-btn");

  // Invoice data
  const invoices = [
    { id: "#12345", date: "2023-10-01", amount: "$19.99", status: "paid" },
    { id: "#12346", date: "2023-09-01", amount: "$9.99", status: "paid" },
    { id: "#12347", date: "2023-08-15", amount: "$49.99", status: "pending" },
    { id: "#12348", date: "2023-07-20", amount: "$149.99", status: "failed" },
  ];

  // Filter invoices based on the search query
  searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    filterInvoices(searchValue);
  });

  // Filter function to show matching invoices
  function filterInvoices(query) {
    const filteredInvoices = invoices.filter((invoice) =>
      invoice.id.toLowerCase().includes(query)
    );
    renderInvoices(filteredInvoices);
  }

  // Render invoices in the table
  function renderInvoices(invoicesToRender) {
    // Clear existing rows
    invoiceTable.innerHTML = "";

    // Render each invoice
    invoicesToRender.forEach((invoice) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${invoice.id}</td>
        <td>${invoice.date}</td>
        <td>${invoice.amount}</td>
        <td><span class="status ${invoice.status}">${
        invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)
      }</span></td>
        <td><button class="btn download-btn ${
          invoice.status === "paid" ? "" : "disabled"
        }">Download</button></td>
      `;

      invoiceTable.appendChild(tr);
    });

    // Disable download buttons for non-paid invoices
    const downloadBtns = document.querySelectorAll(".download-btn");
    downloadBtns.forEach((btn) => {
      if (btn.classList.contains("disabled")) {
        btn.disabled = true; // Disable button if the invoice is not paid
      } else {
        btn.disabled = false;
      }
    });
  }

  // Download button functionality
  invoiceTable.addEventListener("click", function (e) {
    if (
      e.target &&
      e.target.classList.contains("download-btn") &&
      !e.target.classList.contains("disabled")
    ) {
      alert(
        `Downloading invoice ${
          e.target.closest("tr").querySelector("td").textContent
        }...`
      );
    }
  });

  // Initial render of all invoices
  renderInvoices(invoices);
});
