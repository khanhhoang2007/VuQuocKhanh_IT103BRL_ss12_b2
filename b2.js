let subscriptions = [
  { id: "SUB_001", name: "Nguyen Van An", plan: "PERSONAL", deviceLimit: 2 },
  { id: "SUB_002", name: "Tran Thi Bich", plan: "FAMILY", deviceLimit: 5 },
  { id: "SUB_003", name: "Le Hoang Nam", plan: "PERSONAL", deviceLimit: 2 },
];
// Hàm phụ trợ tính hạn mức thiết bị
function getDeviceLimit(plan) {
  return plan === "FAMILY" ? 5 : 2;
}
// Thêm thuê bao mới
function addSubscription(name, plan) {
  const id = "SUB_00" + (subscriptions.length + 1);
  const deviceLimit = getDeviceLimit(plan);
  subscriptions.push({ id, name, plan, deviceLimit });
  console.log(`\nĐã thêm thành công: ${id} - ${name} (${plan})`);
}

// Xem danh sách
function listSubscriptions() {
  console.log("\n--- DANH SÁCH THUÊ BAO ---");
  console.table(subscriptions);
}

// Cập nhật gói cước
function updateSubscription(id, newPlan) {
  const sub = subscriptions.find((s) => s.id === id);
  if (sub) {
    sub.plan = newPlan;
    sub.deviceLimit = getDeviceLimit(newPlan);
    console.log(`\nĐã cập nhật ${id} sang gói ${newPlan}`);
  } else {
    console.log(`\nKhông tìm thấy mã ${id}`);
  }
}

// Hủy thuê bao
function deleteSubscription(id) {
  const index = subscriptions.findIndex((s) => s.id === id);
  if (index !== -1) {
    subscriptions.splice(index, 1);
    console.log(`\nĐã hủy thuê bao ${id}`);
  } else {
    console.log(`\nKhông tìm thấy mã ${id}`);
  }
}
listSubscriptions();

addSubscription("Pham Van Minh", "FAMILY");
listSubscriptions();

updateSubscription("SUB_001", "FAMILY");
listSubscriptions();

deleteSubscription("SUB_002");
listSubscriptions();
