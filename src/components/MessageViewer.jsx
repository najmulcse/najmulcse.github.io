import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, User, Calendar, MessageSquare } from "lucide-react";

const MessageViewer = () => {
  const [messages, setMessages] = useState([]);
  const [showViewer, setShowViewer] = useState(false);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setMessages(storedMessages);
  }, []);

  const clearMessages = () => {
    if (confirm('Are you sure you want to clear all messages?')) {
      localStorage.removeItem('contactMessages');
      setMessages([]);
    }
  };

  if (!showViewer) {
    return (
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setShowViewer(true)}
          className="bg-blue-600 hover:bg-blue-700"
          size="sm"
        >
          View Messages ({messages.length})
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
          <div className="flex gap-2">
            <Button
              onClick={clearMessages}
              variant="outline"
              size="sm"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              Clear All
            </Button>
            <Button
              onClick={() => setShowViewer(false)}
              variant="outline"
              size="sm"
            >
              Close
            </Button>
          </div>
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">{message.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(message.timestamp).toLocaleDateString()} {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{message.email}</span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-white font-medium">{message.subject}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageViewer; 