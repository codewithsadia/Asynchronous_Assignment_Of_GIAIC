// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
async function simulatesTask() {
    console.log("Task started");
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    console.log("Task completed");
}
simulatesTask();
export {};
