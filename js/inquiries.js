/**
 * Dar-e-Arqam Online Quran Academy
 * Admin Inquiries Dashboard Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  renderInquiriesTable();
  initInquiryControls();
});

function getInquiries() {
  try {
    return JSON.parse(localStorage.getItem('darearqam_inquiries') || '[]');
  } catch (e) {
    return [];
  }
}

function setInquiries(list) {
  localStorage.setItem('darearqam_inquiries', JSON.stringify(list));
}

function renderInquiriesTable(filteredList = null) {
  const tableBody = document.getElementById('inquiriesTableBody');
  const countBadge = document.getElementById('inquiriesCount');
  if (!tableBody) return;

  const list = filteredList || getInquiries();
  if (countBadge) countBadge.textContent = list.length;

  if (list.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2.5rem; color: #64748B;">
          No student trial requests recorded yet. Submissions from the "Book Free Trial" form will appear here automatically.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = list.map((item, index) => {
    const waClean = item.whatsappNumber.replace(/[^0-9]/g, '');
    const waDirectUrl = `https://wa.me/${waClean}?text=${encodeURIComponent(`Assalamu Alaikum ${item.parentName}, this is regarding your Free Trial class request for ${item.course} at Dar-e-Arqam Online Quran Academy.`)}`;

    return `
      <tr>
        <td><strong>#${index + 1}</strong></td>
        <td>${item.timestamp || 'N/A'}</td>
        <td><strong>${escapeHtml(item.parentName)}</strong></td>
        <td>
          <a href="${waDirectUrl}" target="_blank" class="btn btn-sm btn-whatsapp" style="display:inline-flex; padding: 0.3rem 0.65rem; font-size: 0.8rem;">
            ${escapeHtml(item.whatsappNumber)}
          </a>
        </td>
        <td>${escapeHtml(item.studentAge || '-')}</td>
        <td><span class="course-badge">${escapeHtml(item.course)}</span></td>
        <td>${escapeHtml(item.preferredTiming || '-')}</td>
        <td>${escapeHtml(item.country || '-')}</td>
        <td>
          <button class="btn btn-sm" style="background:#EF4444; color:#FFF; padding: 0.3rem 0.65rem; font-size: 0.75rem;" onclick="deleteInquiry('${item.id || index}')">
            Delete
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function initInquiryControls() {
  const searchInput = document.getElementById('searchInquiries');
  const exportBtn = document.getElementById('btnExportCsv');
  const clearBtn = document.getElementById('btnClearAll');
  const sampleBtn = document.getElementById('btnAddSample');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const all = getInquiries();
      const filtered = all.filter(item => 
        (item.parentName && item.parentName.toLowerCase().includes(q)) ||
        (item.course && item.course.toLowerCase().includes(q)) ||
        (item.country && item.country.toLowerCase().includes(q)) ||
        (item.whatsappNumber && item.whatsappNumber.includes(q))
      );
      renderInquiriesTable(filtered);
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', exportToCsv);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all inquiries?')) {
        setInquiries([]);
        renderInquiriesTable();
      }
    });
  }

  if (sampleBtn) {
    sampleBtn.addEventListener('click', addSampleLead);
  }
}

function deleteInquiry(id) {
  if (confirm('Delete this inquiry record?')) {
    const list = getInquiries().filter(item => (item.id !== id && String(item.id) !== String(id)));
    setInquiries(list);
    renderInquiriesTable();
  }
}

function addSampleLead() {
  const sample = {
    id: 'INQ-' + Date.now().toString().slice(-6),
    timestamp: new Date().toLocaleString(),
    parentName: "Muhammad Farooq (Sample)",
    whatsappNumber: "+92 300 1234567",
    studentAge: "9 years",
    course: "Quran with Tajweed",
    preferredTiming: "Weekdays (6:00 PM - 7:00 PM)",
    country: "United Kingdom",
    notes: "Wants 3 days a week class."
  };
  const list = getInquiries();
  list.unshift(sample);
  setInquiries(list);
  renderInquiriesTable();
}

function exportToCsv() {
  const list = getInquiries();
  if (list.length === 0) {
    alert('No inquiries to export.');
    return;
  }

  const headers = ["ID", "Timestamp", "Parent/Student Name", "WhatsApp Number", "Student Age", "Course", "Preferred Timing", "Country", "Notes"];
  const rows = list.map(item => [
    `"${item.id || ''}"`,
    `"${item.timestamp || ''}"`,
    `"${(item.parentName || '').replace(/"/g, '""')}"`,
    `"${item.whatsappNumber || ''}"`,
    `"${item.studentAge || ''}"`,
    `"${item.course || ''}"`,
    `"${(item.preferredTiming || '').replace(/"/g, '""')}"`,
    `"${item.country || ''}"`,
    `"${(item.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `darearqam_inquiries_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
